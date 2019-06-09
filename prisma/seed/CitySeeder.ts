import { prisma, WalletCreateOneInput } from "../../src/generated/prisma.ts";
import { Asset } from "../../src/enums/Asset";

export class CitySeeder {
  private newCityWallet: WalletCreateOneInput = {
    create: {
      balances: {
        create: {
          asset: { connect: { name: Asset.CITYVOTES.toString() } },
          value: 0
        }
      }
    }
  };

  async seed(): Promise<CitySeeder> {
    await prisma.createCity({
      name: "Munich",
      available: true,
      votes: 0,
      wallet: {
        create: {
          balances: {
            create: {
              asset: { connect: { name: Asset.CITYVOTES.toString() } },
              value: 0
            }
          }
        }
      }
      // wallet: this.newCityWallet
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
