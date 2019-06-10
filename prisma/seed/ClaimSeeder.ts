import { prisma } from "../../src/generated/prisma-client";
import { Claim } from "../../src/auth/Claims";

export class ClaimSeeder {
  async seed() {
    Object.values(Claim).forEach(
      async claim => await prisma.createClaim({ name: claim.toString() })
    );
  }
}
