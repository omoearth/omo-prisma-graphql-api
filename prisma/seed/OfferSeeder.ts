import { prisma } from "../../src/generated/prisma.ts";

export class OfferSeeder {
  async seed() {
    await prisma.createOffer({
      name: "eFlat S",
      image: "miniscooter",
      description: "100km / month",
      price: 1.11,
      priceCurrency: "€",
      businessFunction: "RENT",
      availabilityStarts: "est. launch 2020 Q1"
    }),
      await prisma.createOffer({
        name: "eFlat M",
        image: "pedelec",
        description: "200km / month",
        price: 2.22,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "est. launch 2020 Q1"
      }),
      await prisma.createOffer({
        name: "eFlat L",
        image: "scooter",
        description: "300km / month",
        price: 3.33,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "est. launch 2020 Q2"
      }),
      await prisma.createOffer({
        name: "eFlat XL",
        image: "minicar",
        description: "500km / month",
        price: 5.55,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "est. launch 2021 Q1"
      });
  }
}
