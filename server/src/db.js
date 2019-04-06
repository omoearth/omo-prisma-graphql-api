const users = [
    {
        id: "1",
        name: "Sam",
        email: "sam@styl.earth"
    },
    {
        id: "2",
        name: "Timo",
        email: "timo@styl.earth"
    },
    {
        id: "3",
        name: "Daniel",
        email: "daniel@styl.earth"
    }
]

const cities = [
    {
        id: "1",
        name: "Munich",
        country: "A",
        votes: "1"
    },
    {
        id: "2",
        name: "Barcelona",
        country: "B",
        votes: "2"
    },
    {
        id: "3",
        name: "Paris",
        country: "C",
        votes: "3"
    }
]

const countries = [
    {
        id: "A",
        name: "Germany"
    },
    {
        id: "B",
        name: "Spain"
        
    },
    {
        id: "C",
        name: "France"
    }
]

const votes = [
    {id: "1", user: "1", city: "1"},
    {id: "2", user: "2", city: "2"},
    {id: "3", user: "2", city: "3"},
    {id: "4", user: "2", city: "2"}
]

const db = {
    users, cities, countries, votes
}

export { db as default }