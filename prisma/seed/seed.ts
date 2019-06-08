import { CitySeeder } from './CitySeeder';
import { ClaimSeeder } from './ClaimSeeder';
import { RoleSeeder } from './RoleSeeder';
import { UserSeeder } from './UserSeeder';
import { OfferSeeder } from './OfferSeeder';
import { EmailTemplateSeeder } from './EmailtemplateSeeder';

async function main() {
  await new CitySeeder().seed();
  await new ClaimSeeder().seed();
  await new RoleSeeder().seed();
  await new UserSeeder().seed();
  await new OfferSeeder().seed();
  await new EmailTemplateSeeder().seed();
}

main().catch(e => console.error(e));