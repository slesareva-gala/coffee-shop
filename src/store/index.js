import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import bestsellers from './bestsellers'
import coffee from './coffee'
import goods from './goods'
import product from './product'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLoading: false
    },
    mutations: {
        setIsLoading(state, value) {
            state.isLoading = value
        }
    },
    actions: {
        setIsLoading({ commit }, value) {
            commit("setIsLoading", value)
        }
    },
    getters: {
        getIsLoading(state) {
            return state.isLoading;
        }
    },
    modules: {
        links,
        bestsellers,
        coffee,
        goods,
        product
    }
})

export default store