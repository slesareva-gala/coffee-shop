const goods = {
    state: {
        goods: [
            {
                id: 0,
                name: "Solimo Coffee Beans 2kg your",
                country: "Brazil",
                price: 10.73,
                image: "good-1.jpg",
            },
            {
                id: 1,
                name: "Presto Coffee Beans 1kg your",
                country: "Brazil",
                price: 15.99,
                image: "good-1.jpg",
            },
            {
                id: 2,
                name: "AROMISTICO Coffee 1kg your",
                country: "Brazil",
                price: 6.99,
                image: "good-1.jpg",
            },
            {
                id: 3,
                name: "Solimo Coffee Beans 2.1kg your",
                country: "Brazil",
                price: 10.73,
                image: "good-1.jpg",
            },
            {
                id: 4,
                name: "Solimo Coffee Beans 2.2kg your",
                country: "Brazil",
                price: 11.73,
                image: "good-1.jpg",
            },
            {
                id: 5,
                name: "Solimo Coffee Beans 2.3kg your",
                country: "Brazil",
                price: 12.73,
                image: "good-1.jpg",
            },
        ],
    },
    getters: {
        getGoods(state) {
            return state.goods
        },
        getGoodsById(state) {
            return (id) => {
                return state.goods.find(card => card.id === +id)
            }
        }
    }
}

export default goods