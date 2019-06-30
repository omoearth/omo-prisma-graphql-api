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
        description: "1. month free bike flat",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+2 FRIENDS",
        image: "miniscooter",
        description: "1. month free eFlat XS",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+4 FRIENDS",
        image: "pedelec",
        description: "1. month free eFlat S",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+6 FRIENDS",
        image: "scooter",
        description: "1. month free eFlat M",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+8 FRIENDS",
        image: "minicar",
        description: "1. month free eFlat L",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+10 FRIENDS",
        image: "car",
        description: "1. month free eFlat XL",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+25 FRIENDS",
        image: "bike",
        description: "lifelong free bike Flat",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+50 FRIENDS",
        image: "miniscooter",
        description: "lifelong free eFlat XS",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+75 FRIENDS",
        image: "pedelec",
        description: "lifelong free eFlat S",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+100 FRIENDS",
        image: "scooter",
        description: "lifelong free eFlat M",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+150 FRIENDS",
        image: "minicar",
        description: "lifelong free eFlat L",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+250 FRIENDS",
        image: "car",
        description: "lifelong free eFlat XL",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+500 FRIENDS",
        image: "city",
        description: "lifelong free eFlat city",
        category: "voucher"
      }),
      await prisma.createOffer({
        name: "+1.000 FRIENDS",
        image: "intercity",
        description: "lifelong free eFlat intercity",
        category: "voucher"
      });
  }
}
