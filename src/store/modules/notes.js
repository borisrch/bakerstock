import notes from '../../data/notes'

const state = {
    notes: []
}

// Mutations modify state. This gets notes from the data/notes.js and assigns
// to this state notes.

const mutations = {
    'SET_NOTES' (state, notes) {
        state.notes = notes;
    },
    'ADD_NOTE' (state, {author, date, comment, priority}) {
        state.notes.push({
            author: author,
            date: date,
            comment: comment,
            priority: priority
        })
    }
}

const actions = {
    addNote: ({commit}, note) => {
        commit('ADD_NOTE', note)
    },
    initNotes: ({commit}) => {
        commit('SET_NOTES', notes)
    }
}

const getters = {
    notes: state => {
        return state.notes;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}