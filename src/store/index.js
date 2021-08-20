import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        value: null,
        value1: null,
        options:null
    },
    mutations: {
        updateValue(state, value) {
            state.value = value
        },

        updateValue1(state, value) {
            if (value.includes("public")) {
                state.value1 = ["public"]
            } else {
                state.value1 = value
            }
            
        },
        updateValueNull(state) {
            state.value = null
        },
        updateOptions(state, value) {
            state.options =value
        }
    }
})