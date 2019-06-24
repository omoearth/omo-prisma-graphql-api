import {
  prisma,
  WalletCreateOneInput
} from "../../src/generated/prisma-client";
import { AssetType } from "../../src/definitions/Enums";

export class CitySeeder {
  private newCityWallet: WalletCreateOneInput = {
    create: {
      balances: {
        create: {
          asset: { connect: { name: AssetType.CITYVOTES.toString() } },
          value: 0
        }
      }
    }
  };
  async seed(): Promise<CitySeeder> {
    await prisma.createCity({
      name: "Munich",
      available: true,
      wallet: this.newCityWallet
    });

    await prisma.createCity({
      name: "Milano",
      available: true,
      wallet: this.newCityWallet
    });

    await prisma.createCity({
      name: "Vienna",
      available: true,
      wallet: this.newCityWallet
    });

    await prisma.createCity({
      name: "Hamburg",
      available: true,
      wallet: this.newCityWallet
    });

    await prisma.createCity({
      name: "London",
      available: false,
      wallet: this.newCityWallet
    });

    await prisma.createCity({
      name: "Barcelona",
      available: false,
      wallet: this.newCityWallet
    });

    await prisma.createCity({
      name: "Rome",
      available: false,
      wallet: this.newCityWallet
    });

    await prisma.createCity({
      name: "Warsaw",
      available: false,
      wallet: this.newCityWallet
    });

    await prisma.createCity({
      name: "Prag",
      available: false,
      wallet: this.newCityWallet
    });

    await prisma.createCity({
      name: "Madrid",
      available: false,
      wallet: this.newCityWallet
    });

    await prisma.createCity({
      name: "Amsterdam",
      available: false,
      wallet: this.newCityWallet
    });

    await prisma.createCity({
      name: "Zuerich",
      available: false,
      wallet: this.newCityWallet
    });

    return this;
  }
}
