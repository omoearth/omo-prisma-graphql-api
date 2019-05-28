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
  votes: {
    subscribe: (parent, args, {
      pubsub
    }) => {
      const channel = Math.random().toString(36).substring(2, 15) // random channel name
      let voteCount = 0
      setInterval(() => pubsub.publish(channel, {
        votes: {
          voteCount: voteCount += Math.floor(Math.random() * Math.floor(42))
        }
      }), 500)
      return pubsub.asyncIterator(channel);
    },
  }
};

export {
  Subscription as
  default
};
