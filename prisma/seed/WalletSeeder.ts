import { prisma, Wallet } from "../../src/generated/prisma.ts";

export class WalletSeeder {
  walletGenesis: Wallet = { id: "" };
  walletMunich: Wallet = { id: "" };
  walletOmoSapiens: Wallet = { id: "" };

  async seed(): Promise<WalletSeeder> {
    this.walletGenesis = await prisma.createWallet({
      omos: 0,
      votes: 0
    });
    this.walletOmoSapiens = await prisma.createWallet({
      omos: 0,
      votes: 0
    });
    this.walletMunich = await prisma.createWallet({
      omos: 0,
      votes: 0
    });
    return this;
  }
}
