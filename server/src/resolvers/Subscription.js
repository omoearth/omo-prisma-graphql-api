const Subscription = {
    // vote: {
    //     subscribe(parent, {cityId}, {db, pubsub}, info)  {
    //         const city = db.cities.find((city) => city.id === cityId)
    //         if (!city) {
    //             throw new Error("city not found")
    //         }
    //         return pubsub.asyncIterator(`vote ${cityId}`)
    //     }  
    // },
    // city: {
    //     subscribe(parent, args, {pubsub}, info) {
    //         return pubsub.asyncIterator('city')
    //     }
    // }
}

export { Subscription as default}

