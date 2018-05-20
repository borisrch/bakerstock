const state = {
    pending: [],
    funds: 10000,
}

const mutations = {
    'ADD_TO_PENDING' (state, {stockId, stockName, quantity, stockPrice}) {
        const record = state.pending.find(element => element.id == stockId);
        if (record) {
            record.quantity = record.quantity + quantity
        } else {
            state.pending.push({
                id: stockId,
                name: stockName,
                quantity: quantity,
                // Remember to use the same variable names that are being passed...
                price: stockPrice
            })
        }

        state.funds -= stockPrice * quantity
    },


    'REMOVE_PENDING' (state, {stockId, stockName, quantity}) {
        let elementPos = state.pending.map(function(x) {return x.id;}).indexOf(stockId);
        state.pending.splice(elementPos, 1);
    }
}

const actions = {
    addPending({commit}, order) {
        commit('ADD_TO_PENDING', order)
    },
    removePending({commit}, order) {
        commit('REMOVE_PENDING', order)
    }
}

const getters = {
    getPending(state) {
        return state.pending;
    },
    funds(state) {
        return state.funds;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}