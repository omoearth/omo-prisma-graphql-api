import { Context } from "../utils/Utils";
import { CityChange, OfferChange } from "../resolvers/ChangeEvents";

export const PublicSubcriptions: Array<String> = ["city", "offer"];

export const Subscription = {
  city: {
    subscribe: (_parent: any, _args: any, context: Context) => {
      return context.pubsub.asyncIterator(CityChange.identifier);
    }
  },
  offer: {
    subscribe: (_parent: any, _args: any, context: Context) => {
      return context.pubsub.asyncIterator(OfferChange.identifier);
    }
  }
};
