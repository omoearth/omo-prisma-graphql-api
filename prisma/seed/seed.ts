import { prisma } from '../../src/generated/prisma.ts';
import { CitySeeder } from './CitySeeder';
import { ClaimSeeder } from './ClaimSeeder';
import { RoleSeeder } from './RoleSeeder';
import { UserSeeder } from './UserSeeder';

async function main() {
  await new CitySeeder().seed();
  await new ClaimSeeder().seed();
  await new RoleSeeder().seed();
  await new UserSeeder().seed();
}

main().catch(e => console.error(e));
