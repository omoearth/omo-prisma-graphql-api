import { prisma } from '../../src/generated/prisma.ts';
import { Claim } from '../../src/auth/Claims';
import { Role } from '../../src/auth/Roles';

export class RoleSeeder {
  async seed() {
    await prisma.createRole({
      name: Role.ADMIN_AUTH,
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
      name: Role.ADMIN_FOO,
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
      name: Role.ADMIN_BAR,
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
    await prisma.createRole({
      name: Role.USER,
      claims: {
        connect: [
          { name: Claim.USER_CREATE },
          { name: Claim.USER_READ },
          { name: Claim.USER_UPDATE },
          { name: Claim.USER_DELETE },
          { name: Claim.CITY_READ },
        ],
      },
    });
  }
}
