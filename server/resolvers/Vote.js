const Vote = {
    city(parent, args, {db}, info) {
        return db.cities.find((city) => {
            return city.id === parent.city
        })
    },
    user(parent, args, {db}, info) {
        return db.users.find((user) => {
            return user.id === parent.user
        })
    }
}

export { Vote as default}