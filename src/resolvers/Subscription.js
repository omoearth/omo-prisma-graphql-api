const Subscription = {
  city: {
    subscribe(parent, args, {
      prisma
    }, info) {
      return prisma.subscription.city({
        where: {
          node: {
            available: true
          }
        }
      }, info)
    }
  },
  cities: {
    subscribe: (parent, args, {
      pubsub
    }) => {
      console.log(parent);
      console.log(args);

      const channel = Math.random().toString(36).substring(2, 15) // random channel name
      let voteCountM = 0;
      let voteCountHH = 0;
      let voteCountV = 0;
      let voteCountMI = 0;

      setInterval(() =>

        pubsub.publish(channel, {
          cities: [{
              id: "cjw8pu77cnp830b05veyn3xfg",
              name: "Munich",
              available: true,
              votes: voteCountM += Math.floor(Math.random() * Math.floor(5))
            },
            {
              id: "cjw8pu77knp870b05pncirc7h",
              name: "Hamburg",
              available: true,
              votes: voteCountHH += Math.floor(Math.random() * Math.floor(5))
            },
            {
              id: "cjw8pu77tnp8b0b05q3y14myh",
              name: "Vienna",
              available: true,
              votes: voteCountV += Math.floor(Math.random() * Math.floor(5))
            },
            {
              id: "cjw8pu77ynp8f0b05dr0l952y",
              name: "Milano",
              available: true,
              votes: voteCountMI += Math.floor(Math.random() * Math.floor(5))
            }
          ]
        }), 1500);

      return pubsub.asyncIterator(channel);
    },
  }
};

export {
  Subscription as
  default
};
