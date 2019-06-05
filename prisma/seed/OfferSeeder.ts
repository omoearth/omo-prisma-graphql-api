import { prisma } from "../../src/generated/prisma.ts";

export class OfferSeeder {
  async seed() {
    await prisma.createOffer({
      name: "eFlat S",
      image: "miniscooter",
      description: "100km / month",
      price: 33,
      priceCurrency: "€",
      businessFunction: "RENT",
      availabilityStarts: "est. launch 2020 Q1",
      category: "mobility"
    }),
      await prisma.createOffer({
        name: "eFlat M",
        image: "pedelec",
        description: "200km / month",
        price: 66,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "est. launch 2020 Q1",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "eFlat L",
        image: "scooter",
        description: "300km / month",
        price: 99,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "est. launch 2020 Q1",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "eFlat XL",
        image: "minicar",
        description: "500km / month",
        price: 199,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "est. launch 2020 Q2",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "eFlat City",
        image: "city",
        description: "750km / month",
        price: 222,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "est. launch 2021 Q1",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "eFlat InterCity",
        image: "intercity",
        description: "2500km / month",
        price: 555,
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
