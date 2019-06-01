import { prisma } from '../../src/generated/prisma.ts';
import { Claim } from '../../src/auth/Claims';

export class RoleSeeder {
  async seed() {
    await prisma.createRole({
      name: 'Admin.Authorization',
      claims: {
        connect: [
          { name: Claim.CLAIM_CREATE },
          { name: Claim.CLAIM_READ },
          { name: Claim.CLAIM_UPDATE },
          { name: Claim.CLAIM_DELETE },
        ],
      },
    });
    await prisma.createRole({
      name: 'Admin.foo',
      claims: {
        connect: [
          { name: Claim.FOO_CREATE },
          { name: Claim.FOO_READ },
          { name: Claim.FOO_UPDATE },
          { name: Claim.FOO_DELETE },
        ],
      },
    });
    await prisma.createRole({
      name: 'Admin.bar',
      claims: {
        connect: [
          { name: Claim.CLAIM_CREATE },
          { name: Claim.BAR_CREATE },
          { name: Claim.BAR_READ },
          { name: Claim.BAR_UPDATE },
          { name: Claim.BAR_DELETE },
        ],
      },
    });
  }
}
