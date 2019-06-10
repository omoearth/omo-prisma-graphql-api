import { prisma } from '../../src/generated/prisma-client';
import { TransactionType } from '../../src/definitions/Enums';

export class TransactionTypeSeeder {
	async seed() {
		Object.values(TransactionType).forEach(
			async transactionType => await prisma.createTransactionType({ name: transactionType.toString() })
		);
	}
}
