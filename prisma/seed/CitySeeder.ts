import { prisma } from '../../src/generated/prisma.ts';

export class CitySeeder {
  async seed() {
    await prisma.createCity({
      name: 'Munich',
      available: true,
      votes: 0,
    });

    await prisma.createCity({
      name: 'Milano',
      available: true,
      votes: 0,
    });

    await prisma.createCity({
      name: 'Vienna',
      available: true,
      votes: 0,
    });

    await prisma.createCity({
      name: 'Hamburg',
      available: true,
      votes: 0,
    });
  }
}
