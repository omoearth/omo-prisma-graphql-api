import { City, Offer } from "../generated/prisma.ts";
import { pubsub } from "../server";

export enum CityChangeEvent {
  VOTE = "VOTE",
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE"
}

export const CityChange = {
  identifier: "CITY_CHANGE",
  publish: (city: City, event: CityChangeEvent) => {
    console.log(event.toString());
    pubsub.publish(CityChange.identifier, { city });
  }
};

export enum OfferChangeEvent {
  BUY = "BUY",
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE"
}

export const OfferChange = {
  identifier: "OFFER_CHANGE",
  publish: (offer: Offer, event: OfferChangeEvent) => {
    console.log(event.toString());
    pubsub.publish(OfferChange.identifier, { offer });
  }
};
