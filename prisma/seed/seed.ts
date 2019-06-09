import { CitySeeder } from "./CitySeeder";
import { ClaimSeeder } from "./ClaimSeeder";
import { RoleSeeder } from "./RoleSeeder";
import { UserSeeder } from "./UserSeeder";
import { OfferSeeder } from "./OfferSeeder";
import { EmailTemplateSeeder } from "./EmailtemplateSeeder";
import { WalletSeeder } from "./WalletSeeder";
import { TransactionSeeder } from "./TransactionSeeder";

async function main() {
  let wallets = await new WalletSeeder().seed();
  let cities = await new CitySeeder(wallets).seed();
  await new ClaimSeeder().seed();
  await new RoleSeeder().seed();
  await new UserSeeder(wallets).seed();
  await new OfferSeeder().seed();
  await new EmailTemplateSeeder().seed();
  // await new TransactionSeeder(wallets).seed();
}

main().catch(e => console.error(e));
