import {TransactionType}  from '../definitions/Enums';
import { AssetType } from '../definitions/Enums';
import  Context  from '../definitions/Interfaces';
import { Int } from '../generated/prisma-client';

export class TransactionSystem {
  async transact(
    context: Context,
    walletFromId: string,
    walletToId: string,
    transactionType: TransactionType,
    asset: AssetType,
    amount: Int
  ) {
    let toBalances = await context.prisma.wallet({ id: walletToId }).balances({ where: { asset: { name: asset } } });
    if (!toBalances) return `Balance for wallet not found`;
    let toBalance = toBalances[0];

    switch (transactionType) {
      case TransactionType.TRANSFER:
        let fromBalances = await context.prisma
          .wallet({ id: walletFromId })
          .balances({ where: { asset: { name: asset } } });
        if (!fromBalances) return `Balance for wallet not found`;
        let fromBalance = fromBalances[0];

        if (fromBalance.value < amount) return 'Not enough balance in wallet!';

        fromBalance.value -= amount;
        await context.prisma.updateBalance({
          data: { value: fromBalance.value },
          where: { id: fromBalance.id },
        });

      case TransactionType.CREATE:
        toBalance.value += amount;
        await context.prisma.updateBalance({
          data: { value: toBalance.value },
          where: { id: toBalance.id },
        });
    }

    await context.prisma.createTransaction({
      input: { connect: { id: walletFromId } },
      output: { connect: { id: walletToId } },
      amount: amount,
      asset: { connect: { name: asset.toString() } },
      operation: { connect: { name: transactionType.toString() } },
    });
  }
}
