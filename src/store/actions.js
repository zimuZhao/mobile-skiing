import * as types from './mutation-types';
import Q from 'q';

const actions = {
  getMenuLogin({commit, state}, params) {
    return Q.Promise((resolve, reject) => {
      commit(types.MENULOGIN, params);
      resolve(params)
    });
  }
}

export default actions;
