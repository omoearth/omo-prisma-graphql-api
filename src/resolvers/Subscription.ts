import { Context } from '../utils/Utils';
import { CityChange } from '../resolvers/ChangeEvents';

export const PublicSubcriptions: Array<String> = ['city'];

export const Subscription = {
  city: {
    subscribe: (_parent: any, _args: any, context: Context) => {
      return context.pubsub.asyncIterator(CityChange.identifier);
    },
  },
};
