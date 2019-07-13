import { prisma } from "../../src/generated/prisma-client";
export class OfferSeeder {
  async seed() {
    await prisma.createOffer({
      name: "Flat XS",
      image: "bike",
      description: "∞km / month",
      price: 11,
      priceCurrency: "€",
      businessFunction: "RENT",
      availabilityStarts: "2020 Q1",
      category: "mobility"
    }),
      await prisma.createOffer({
        name: "Flat S",
        image: "miniscooter",
        description: "50km / month",
        price: 22,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "2020 Q1",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "Flat M",
        image: "pedelec",
        description: "75km / month",
        price: 33,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "2020 Q1",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "Flat L",
        image: "scooter",
        description: "100km / month",
        price: 55,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "2020 Q2",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "Flat XL",
        image: "minicar",
        description: "250km / month",
        price: 99,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "2021 Q1",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "Flat XXL",
        image: "car",
        description: "500km / month",
        price: 199,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "2021 Q1",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "Flat CITY",
        image: "city",
        description: "750km / month",
        price: 255,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "2021 Q3",
        category: "mobility"
      }),
      await prisma.createOffer({
        name: "Flat INTERCITY",
        image: "intercity",
        description: "1000km / month",
        price: 555,
        priceCurrency: "€",
        businessFunction: "RENT",
        availabilityStarts: "2022 Q3",
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
    await prisma.createOffer({
      name: "Plant the vision",
      image: "",
      description: "the first 100 subscribers are manifesting the vision",
      category: "goal",
      votesNeeded: 100,
      benefit: "∞"
    });
    await prisma.createOffer({
      name: "Founding the startup",
      image: "",
      description: "we will found a new startup out of the garage together",
      category: "goal",
      votesNeeded: 1000,
      benefit: "5 years"
    });
    await prisma.createOffer({
      name: "Start Development",
      image: "",
      description: "we start to develop the main sharing platform",
      category: "goal",
      votesNeeded: 10000,
      benefit: "6 months"
    });
    await prisma.createOffer({
      name: "Integrating bikes",
      image: "bike",
      description:
        "we start to integrate bike rentals focussing first on the leading cities",
      category: "goal",
      votesNeeded: 100000,
      benefit: "1 week"
    });
    await prisma.createOffer({
      name: "Integrating pedelecs",
      image: "pedelec",
      description:
        "We start to integrate mini scooter rentals focussing first on the leading cities",
      category: "goal",
      votesNeeded: 500000,
      benefit: "5 days"
    });
    await prisma.createOffer({
      name: "Integrating mini-scooters",
      image: "miniscooter",
      description:
        "We start to integrate pedelec rentals focussing first on the leading cities",
      category: "goal",
      votesNeeded: 1000000,
      benefit: "3 days"
    });
    await prisma.createOffer({
      name: "Integrating scooters",
      image: "scooter",
      description:
        "We start to integrate scooter rentals focussing first on the leading cities",
      category: "goal",
      votesNeeded: 50000000,
      benefit: "1 days"
    });
    await prisma.createOffer({
      name: "Integrating mini-cars",
      image: "minicar",
      description:
        "We start to integrate mini car rentals focussing first on the leading cities",
      category: "goal",
      votesNeeded: 10000000,
      benefit: "12 hours"
    });
    await prisma.createOffer({
      name: "Integrating cars",
      image: "car",
      description:
        "We start to integrate car rentals focussing first on the leading cities",
      category: "goal",
      votesNeeded: 50000000,
      benefit: "9 hours"
    });
    await prisma.createOffer({
      name: "Integrating public",
      image: "intercity",
      description:
        "We start to integrate public transport focussing first on the leading cities",
      category: "goal",
      votesNeeded: 100000000,
      benefit: "6 hours"
    });
    await prisma.createOffer({
      name: "Integrating intercity",
      image: "intercity",
      description: "We start to integrate intercity trains & buses",
      category: "goal",
      votesNeeded: 250000000,
      benefit: "3 hours"
    });
    await prisma.createOffer({
      name: "Integrating air-taxi",
      image: "",
      description: "We start to integrate the first air-taxis",
      category: "goal",
      votesNeeded: 500000000,
      benefit: "3 hours"
    });
    await prisma.createOffer({
      name: "Integrating hyperloop",
      image: "",
      description: "We start to integrate hyperloops",
      category: "goal",
      votesNeeded: 1000000000,
      benefit: "3 hours"
    });
  }
}
