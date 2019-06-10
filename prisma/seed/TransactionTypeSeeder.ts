import { prisma } from "../../src/generated/prisma-client";
import { TransactionType } from "../../src/enums/TransactionType";

export class TransactionTypeSeeder {
  async seed() {
    Object.values(TransactionType).forEach(
      async transactionType =>
        await prisma.createTransactionType({ name: transactionType.toString() })
    );
  }
}
