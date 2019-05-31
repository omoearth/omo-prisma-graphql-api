import { prisma } from '../../src/generated/prisma.ts';

export class UserSeeder {
  async seed() {
    await prisma.createUser({
      name: 'Omo Sapiens',
      email: 'admin@omo.earth',
      password: '$2a$10$erVpiTyklC09tIASpFVBtunBsOThqulnZytRSCoe6Z/GNbM8cnA2G',
      city: { connect: { name: 'Munich' } },
      roles: { connect: [{ name: 'Admin.Authorization' }, { name: 'Admin.bar' }] },
    });

    await prisma.createUser({
      name: 'Omo foo',
      email: 'foo@omo.earth',
      password: '$2a$10$erVpiTyklC09tIASpFVBtunBsOThqulnZytRSCoe6Z/GNbM8cnA2G',
      city: { connect: { name: 'Hamburg' } },
      roles: { connect: [{ name: 'Admin.foo' }] },
    });

    await prisma.createUser({
      name: 'Omo bar',
      email: 'bar@omo.earth',
      password: '$2a$10$erVpiTyklC09tIASpFVBtunBsOThqulnZytRSCoe6Z/GNbM8cnA2G',
      city: { connect: { name: 'Hamburg' } },
      roles: { connect: [{ name: 'Admin.bar' }] },
    });
  }
}
