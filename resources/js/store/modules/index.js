import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {}

const mutations = {}

const actions = {}

const getters = {}

// Load store modules dynamically.
const requireContext = require.context('./modules', true, /.*\.js$/)
const modules = requireContext.keys()
    .map(file =>
        [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
    )
    .reduce((modules, [name, module]) => {
        module.namespaced = true
        modules[name] = module

        return modules
    }, {})

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules,
})
