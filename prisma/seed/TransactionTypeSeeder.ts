import { prisma } from "../../src/generated/prisma.ts";
import { TransactionType } from "../../src/enums/TransactionType";

export class TransactionTypeSeeder {
  async seed() {
    Object.values(TransactionType).forEach(
      async transactionType =>
        await prisma.createTransactionType({ name: transactionType.toString() })
    );
  }
}
