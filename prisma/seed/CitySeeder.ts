import { prisma, WalletCreateOneInput } from '../../src/generated/prisma-client';
import { Asset } from '../../src/enums/Asset';

export class CitySeeder {
  private newCityWallet: WalletCreateOneInput = {
    create: {
      balances: {
        create: {
          asset: { connect: { name: Asset.CITYVOTES.toString() } },
          value: 0,
        },
      },
    },
  };

  async seed(): Promise<CitySeeder> {
    await prisma.createCity({
      name: 'Munich',
      available: true,
      wallet: this.newCityWallet,
    });

    await prisma.createCity({
      name: 'Milano',
      available: true,
      wallet: this.newCityWallet,
    });

    await prisma.createCity({
      name: 'Vienna',
      available: true,
      wallet: this.newCityWallet,
    });

    await prisma.createCity({
      name: 'Hamburg',
      available: true,
      wallet: this.newCityWallet,
    });

    return this;
  }
}
