import { prisma, WalletCreateOneInput } from "../../src/generated/prisma.ts";
import { Asset } from "../../src/enums/assets";

export class CitySeeder {
  private newCityWallet: WalletCreateOneInput = {
    create: {
      balances: {
        create: { type: { connect: { name: Asset.CITYVOTES } }, value: 0 }
      }
    }
  };

  async seed(): Promise<CitySeeder> {
    await prisma.createCity({
      name: "Munich",
      available: true,
      votes: 0,
      wallet: this.newCityWallet
    });

    await prisma.createCity({
      name: "Milano",
      available: true,
      votes: 0,
      wallet: this.newCityWallet
    });

    await prisma.createCity({
      name: "Vienna",
      available: true,
      votes: 0,
      wallet: this.newCityWallet
    });

    await prisma.createCity({
      name: "Hamburg",
      available: true,
      votes: 0,
      wallet: this.newCityWallet
    });

    return this;
  }
}
