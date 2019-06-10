import { prisma, WalletCreateOneInput } from '../../src/generated/prisma-client';
import { Role } from '../../src/auth/Roles';
import { Asset } from '../../src/enums/Asset';

export class UserSeeder {
  private newCityWallet: WalletCreateOneInput = {
    create: {
      balances: {
        create: [
          { asset: { connect: { name: Asset.CITYVOTES } }, value: 50 },
          { asset: { connect: { name: Asset.EURO } }, value: 0 },
          { asset: { connect: { name: Asset.OMO } }, value: 0 },
        ],
      },
    },
  };

  async seed() {
    await prisma.createUser({
      name: 'Omo Sapiens',
      identifier: 'admin@omo.earth',
      identificationType: 'LOGIN',
      password: '$2a$10$erVpiTyklC09tIASpFVBtunBsOThqulnZytRSCoe6Z/GNbM8cnA2G',
      city: { connect: { name: 'Munich' } },
      roles: { connect: [{ name: Role.USER }, { name: Role.ADMIN_AUTH }] },
      wallet: this.newCityWallet,
    });

    await prisma.createUser({
      name: 'Omo foo',
      identifier: 'foo@omo.earth',
      identificationType: 'LOGIN',
      password: '$2a$10$erVpiTyklC09tIASpFVBtunBsOThqulnZytRSCoe6Z/GNbM8cnA2G',
      city: { connect: { name: 'Hamburg' } },
      roles: { connect: [{ name: Role.ADMIN_FOO }] },
      wallet: this.newCityWallet,
    });

    await prisma.createUser({
      name: 'Omo bar',
      identifier: 'bar@omo.earth',
      identificationType: 'LOGIN',
      password: '$2a$10$erVpiTyklC09tIASpFVBtunBsOThqulnZytRSCoe6Z/GNbM8cnA2G',
      city: { connect: { name: 'Hamburg' } },
      roles: { connect: [{ name: Role.ADMIN_BAR }] },
      wallet: this.newCityWallet,
    });
  }
}
