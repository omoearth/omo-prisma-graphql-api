import { prisma } from '../../src/generated/prisma.ts';

export class RoleSeeder {
  async seed() {
    await prisma.createRole({
      name: 'Admin.Authorization',
      claims: {
        connect: [{ name: 'claim.create' }, { name: 'claim.read' }, { name: 'claim.update' }, { name: 'claim.delete' }],
      },
    });
    await prisma.createRole({
      name: 'Admin.foo',
      claims: {
        connect: [{ name: 'foo.create' }, { name: 'foo.read' }, { name: 'foo.update' }, { name: 'foo.delete' }],
      },
    });
    await prisma.createRole({
      name: 'Admin.bar',
      claims: {
        connect: [
          { name: 'claim.create' },
          { name: 'bar.create' },
          { name: 'bar.read' },
          { name: 'bar.update' },
          { name: 'bar.delete' },
        ],
      },
    });
  }
}
