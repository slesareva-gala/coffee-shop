const coffee = {
    state: {
        coffee: [
            {
                id: 0,
                name: "Solimo Coffee Beans 2kg our",
                country: "Brazil",
                price: 10.73,
                image: "coffee-3.jpg",
            },
            {
                id: 1,
                name: "Presto Coffee Beans 1kg our",
                country: "Brazil",
                price: 15.99,
                image: "coffee-3.jpg",
            },
            {
                id: 2,
                name: "AROMISTICO Coffee 1kg our",
                country: "Brazil",
                price: 6.99,
                image: "coffee-3.jpg",
            },
            {
                id: 3,
                name: "Solimo Coffee Beans 2.1kg our",
                country: "Brazil",
                price: 10.73,
                image: "coffee-3.jpg",
            },
            {
                id: 4,
                name: "Solimo Coffee Beans 2.2kg our",
                country: "Brazil",
                price: 11.73,
                image: "coffee-3.jpg",
            },
            {
                id: 5,
                name: "Solimo Coffee Beans 2.3kg our",
                country: "Brazil",
                price: 12.73,
                image: "coffee-3.jpg",
            },
        ],
    },
    getters: {
        getCoffee(state) {
            return state.coffee
        },
    }
}

export default coffee