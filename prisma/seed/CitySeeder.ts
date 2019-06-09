import { prisma } from "../../src/generated/prisma.ts";
import { WalletSeeder } from "./WalletSeeder";
export class CitySeeder {
  private wallets: WalletSeeder;

  constructor(wallets: WalletSeeder) {
    this.wallets = wallets;
  }

  async seed(): Promise<CitySeeder> {
    await prisma.createCity({
      name: "Munich",
      available: true,
      votes: 0
      // wallet: { connect: { id: this.wallets.walletMunich.id } }
    });

    await prisma.createCity({
      name: "Milano",
      available: true,
      votes: 0
    });

    await prisma.createCity({
      name: "Vienna",
      available: true,
      votes: 0
    });

    await prisma.createCity({
      name: "Hamburg",
      available: true,
      votes: 0
    });

    return this;
  }
}
