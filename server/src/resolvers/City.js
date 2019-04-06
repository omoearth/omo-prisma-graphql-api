const City = {
    country(parent, args, {db}, info) {
        return db.countries.find((country) => {
            return country.id === parent.country
        })
    },
    votes(parent, args, {db}, info) {
        return db.votes.filter((vote) => {
            return vote.city === parent.id
        })
    }
}

export {City as default} 