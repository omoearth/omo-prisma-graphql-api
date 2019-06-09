import { prisma } from "../../src/generated/prisma-client";

export class OfferSeeder {
  async seed() {
    await prisma.createOffer({
      name: "eFlat S",
      image: "pedelec",
      description: "100km / month",
      price: 33,
      priceCurrency: "€",
      businessFunction: "RENT",
      availabilityStarts: "est. launch 2020 Q1",
      category: "mobility"
    }),
      await prisma.createOffer({
        name: "eFlat M",
        image: "scooter",
        description: "200km / month",
        price: 66,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "est. launch 2020 Q1",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "eFlat L",
        image: "minicar",
        description: "300km / month",
        price: 99,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "est. launch 2020 Q3",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "eFlat XL",
        image: "car",
        description: "500km / month",
        price: 199,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "est. launch 2021 Q1",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "15 + 15 ø",
        image: "0",
        description: "50 votes",
        price: 0,
        priceCurrency: "€",
        businessFunction: "BUY",
        category: "token"
      }),
      await prisma.createOffer({
        name: "30 ø",
        image: "25",
        description: "25 votes",
        price: 25,
        priceCurrency: "€",
        businessFunction: "BUY",
        category: "token"
      }),
      await prisma.createOffer({
        name: "150 ø",
        image: "100",
        description: "100 votes",
        price: 100,
        priceCurrency: "€",
        businessFunction: "BUY",
        category: "token"
      }),
      await prisma.createOffer({
        name: "2500 ø",
        image: "1000",
        description: "1000 votes",
        price: 1000,
        priceCurrency: "€",
        businessFunction: "BUY",
        category: "token"
      });
  }
}
