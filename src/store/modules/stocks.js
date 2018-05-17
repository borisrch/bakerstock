import stocks from '../../data/stocks'

const state = {
    stocks: []
}

// Mutations only way to modify state. Doesn't care about business logic.

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks

    },
    'RND_STOCKS' (state) {
        // Randomize
    }
}

// Actions are functions which dispatch mutations. Can have asynchronous operations, perform business logic
// and dispatch multiple mutations.

const actions = {
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS')
    }
}

const getters = {
    stocks: state => {
        return state.stocks
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}