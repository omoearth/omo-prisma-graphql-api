// import { Context } from "../definitions/Interfaces";
// import { VoteCity } from "../QueryArguments";
// import { TransactionSystem } from "./TransactionSystem";
// import { TransactionType, AssetType } from "../definitions/Enums";
// import { CityChange, CityChangeEvent } from "../resolvers/ChangeEvents";
// const transactionSystem = new TransactionSystem();

// export class CityTransactions {
//   async voteCity(context: Context, cityVote: VoteCity) {
//     console.log("voteCity");
//     let cityWalletId = await context.prisma
//       .city({ id: cityVote.cityId })
//       .wallet()
//       .id();
//     let userWalletId = await context.prisma
//       .user({ id: context.userid })
//       .wallet()
//       .id();
//     await transactionSystem.transact(
//       context,
//       userWalletId,
//       cityWalletId,
//       TransactionType.TRANSFER,
//       AssetType.CITYVOTES,
//       cityVote.amount
//     );

//     //Subscription
//     let city = await context.prisma.city({ id: cityVote.cityId });
//     if (city) {
//       CityChange.publish(city, CityChangeEvent.VOTE);
//     }
//   }
// }
