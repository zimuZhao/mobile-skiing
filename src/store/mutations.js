import * as types from './mutation-types';

const mutations = {
  [types.MENULOGIN](state, data) {
    state.menuLogin = _.assign({}, data);
  }
};

export default mutations;
