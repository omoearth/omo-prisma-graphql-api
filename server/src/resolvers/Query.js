const Query = {
    users(parent, args, {db}, info) {
        if(!args.filter ) {
            return db.users
        } 
        return db.users.filter((user) => {
            return db.user.name.toLocaleLowerCase().includes(args.filter.toLocaleLowerCase())
        })
    },
   cities(parent, args, {db}, info) {
       if(!args.filter) {
           return db.cities
       }
       return db.cities.filter((city) => {
           const isCityMatch = city.name.toLocaleLowerCase().includes(args.filter.toLocaleLowerCase())
           return isCityMatch 
       })
   },
   votes(parent, args, {db}, info) {
        return db.votes
    }
}

export { Query as default }
