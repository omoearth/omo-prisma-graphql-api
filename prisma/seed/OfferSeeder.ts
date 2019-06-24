import { prisma } from "../../src/generated/prisma-client";

export class OfferSeeder {
  async seed() {
    await prisma.createOffer({
      name: "Bike Flat",
      image: "bike",
      description: "∞km / month",
      price: 11,
      priceCurrency: "€",
      businessFunction: "RENT",
      availabilityStarts: "est. launch 2020 Q1",
      category: "mobility"
    }),
      await prisma.createOffer({
        name: "eFlat XS",
        image: "miniscooter",
        description: "50km / month",
        price: 22,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "est. launch 2020 Q1",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "eFlat S",
        image: "pedelec",
        description: "75km / month",
        price: 33,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "est. launch 2020 Q1",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "eFlat M",
        image: "scooter",
        description: "100km / month",
        price: 55,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "est. launch 2020 Q1",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "eFlat L",
        image: "minicar",
        description: "250km / month",
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
        name: "eFlat city",
        image: "city",
        description: "750km / month",
        price: 255,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "est. launch 2021 Q1",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "eFlat intercity",
        image: "intercity",
        description: "1000km / month",
        price: 555,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "est. launch 2021 Q1",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "+1 FRIEND",
        image: "bike",
        description: "Enjoy 1. month the Bike Flat for free",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+2 FRIENDS",
        image: "miniscooter",
        description: "Enjoy 1. month the eFlat XS for free",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+4 FRIENDS",
        image: "pedelec",
        description: "Enjoy 1. month the eFlat S for free",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+6 FRIENDS",
        image: "scooter",
        description: "Enjoy 1. month the eFlat M for free",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+8 FRIENDS",
        image: "minicar",
        description: "Enjoy 1. month the eFlat L for free",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+10 FRIENDS",
        image: "car",
        description: "Enjoy 1. month the eFlat XL for free",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+25 FRIENDS",
        image: "bike",
        description: "Enjoy lifelong the bikeFlat for free",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+50 FRIENDS",
        image: "miniscooter",
        description: "Enjoy lifelong the eFlat XS for free",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+100 FRIENDS",
        image: "pedelec",
        description: "Enjoy lifelong the eFlat S for free",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+250 FRIENDS",
        image: "scooter",
        description: "Enjoy lifelong the eFlat M for free",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+500 FRIENDS",
        image: "minicar",
        description: "Enjoy lifelong the eFlat L for free",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+1.000 FRIENDS",
        image: "car",
        description: "Enjoy lifelong the eFlat XL for free",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+2.500 FRIENDS",
        image: "intercity",
        description: "Enjoy lifelong the eFlat city for free",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+10.000 FRIENDS",
        image: "intercity",
        description: "Enjoy lifelong the eFlat intercity for free",
        category: "voucher"
      });
  }
}
