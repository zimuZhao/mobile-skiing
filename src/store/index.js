import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import state from './state';
import mutations from './mutations';
import system from './modules/system'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {
    system,
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
})
