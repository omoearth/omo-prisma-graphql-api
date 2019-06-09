import { prisma } from '../../src/generated/prisma.ts';
import { Role } from '../../src/auth/Roles';

export class UserSeeder {
  async seed() {
    await prisma.createUser({
      name: 'Omo Sapiens',
      identifier: 'admin@omo.earth',
      identificationType: 'LOGIN',
      password: '$2a$10$erVpiTyklC09tIASpFVBtunBsOThqulnZytRSCoe6Z/GNbM8cnA2G',
      city: { connect: { name: 'Munich' } },
      roles: { connect: [{ name: Role.USER }, { name: Role.ADMIN_AUTH }] },
    });

    await prisma.createUser({
      name: 'Omo foo',
      identifier: 'foo@omo.earth',
      identificationType: 'LOGIN',
      password: '$2a$10$erVpiTyklC09tIASpFVBtunBsOThqulnZytRSCoe6Z/GNbM8cnA2G',
      city: { connect: { name: 'Hamburg' } },
      roles: { connect: [{ name: Role.ADMIN_FOO }] },
    });

    await prisma.createUser({
      name: 'Omo bar',
      identifier: 'bar@omo.earth',
      identificationType: 'LOGIN',
      password: '$2a$10$erVpiTyklC09tIASpFVBtunBsOThqulnZytRSCoe6Z/GNbM8cnA2G',
      city: { connect: { name: 'Hamburg' } },
      roles: { connect: [{ name: Role.ADMIN_BAR }] },
    });
  }
}
