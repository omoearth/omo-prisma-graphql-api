import { prisma } from "../../src/generated/prisma.ts";
import { Role } from "../../src/auth/Roles";
import { WalletSeeder } from "./WalletSeeder";

export class UserSeeder {
  private wallets: WalletSeeder;
  constructor(wallets: WalletSeeder) {
    this.wallets = wallets;
  }
  async seed() {
    await prisma.createUser({
      name: "Omo Sapiens",
      email: "admin@omo.earth",
      password: "$2a$10$erVpiTyklC09tIASpFVBtunBsOThqulnZytRSCoe6Z/GNbM8cnA2G",
      city: { connect: { name: "Munich" } },
      roles: { connect: [{ name: Role.USER }, { name: Role.ADMIN_AUTH }] },
      // wallet: { connect: { id: this.wallets.walletOmoSapiens.id } },
      votes: 100
    });

    await prisma.createUser({
      name: "Omo foo",
      email: "foo@omo.earth",
      password: "$2a$10$erVpiTyklC09tIASpFVBtunBsOThqulnZytRSCoe6Z/GNbM8cnA2G",
      city: { connect: { name: "Hamburg" } },
      roles: { connect: [{ name: Role.ADMIN_FOO }] }
    });

    await prisma.createUser({
      name: "Omo bar",
      email: "bar@omo.earth",
      password: "$2a$10$erVpiTyklC09tIASpFVBtunBsOThqulnZytRSCoe6Z/GNbM8cnA2G",
      city: { connect: { name: "Hamburg" } },
      roles: { connect: [{ name: Role.ADMIN_BAR }] }
    });
  }
}
