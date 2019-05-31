import { prisma } from '../../src/generated/prisma.ts';

export class ClaimSeeder {
  async seed() {
    await prisma.createClaim({ name: 'claim.create' });
    await prisma.createClaim({ name: 'claim.read' });
    await prisma.createClaim({ name: 'claim.update' });
    await prisma.createClaim({ name: 'claim.delete' });

    await prisma.createClaim({ name: 'foo.create' });
    await prisma.createClaim({ name: 'foo.read' });
    await prisma.createClaim({ name: 'foo.update' });
    await prisma.createClaim({ name: 'foo.delete' });

    await prisma.createClaim({ name: 'bar.create' });
    await prisma.createClaim({ name: 'bar.read' });
    await prisma.createClaim({ name: 'bar.update' });
    await prisma.createClaim({ name: 'bar.delete' });
  }
}
