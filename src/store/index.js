import { createStore } from 'vuex'

const store = createStore({

    state () {
        return {
            cart :[]
        }
    },
    mutations: {
        AddCart (state, payload) {
            state.cart.push(payload)
        }
    },






})

export default store;