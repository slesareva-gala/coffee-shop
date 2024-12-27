const coffee = {
    state: {
        coffee: [],
        searchValue: '',
    },
    mutations: {
        setCoffeeData(state, data) {
            state.coffee = data
        },
        setSearchValue(state, value) {
            state.searchValue = value
        },
    },
    actions: {
        setCoffeeData({ commit }, data) {
            commit('setCoffeeData', data)
        },
        setSearchValue({ commit }, value) {
            commit('setSearchValue', value)
        },
    },
    getters: {
        getCoffee(state) {
            return state.coffee
        },
        getCoffeeById(state) {
            return (id) => {
                return state.coffee.find(card => card.id === +id)
            }
        },
        getSearchValue(state) {
            return state.searchValue
        },
    }
}

export default coffee