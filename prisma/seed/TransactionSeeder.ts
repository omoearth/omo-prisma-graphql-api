import { prisma } from "../../src/generated/prisma.ts";
import { WalletSeeder } from "./WalletSeeder";

export class TransactionSeeder {
  private wallets: WalletSeeder;

  constructor(wallets: WalletSeeder) {
    this.wallets = wallets;
  }

  async seed(): Promise<TransactionSeeder> {
    // await prisma.createTransaction({
    //   input: { connect: { id: this.wallets.walletGenesis.id } },
    //   output: { connect: { id: this.wallets.walletGenesis.id } },
    //   amount: 10000,
    //   asset: "OMO",
    //   operation: "CREATE"
    // });
    // await prisma.createTransaction({
    //   input: { connect: { id: this.wallets.walletGenesis.id } },
    //   output: { connect: { id: this.wallets.walletGenesis.id } },
    //   amount: 10000,
    //   // asset: "VOTE",
    //   // operation: "CREATE"
    // });
    return this;
  }
}
