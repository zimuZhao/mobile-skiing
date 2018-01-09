import {mergeMock} from '../../public/utils/confUtils'

const PAGEMOCK = true;

const MODULECONF = {

  home: {
    NAME: '首页',
    MOCK: true,
    API: {
      GET: '/'
    },
    PARAMS(params){
      return {
        token: params.token
      }
    }
  },
  login: {
    NAME: '登录',
    MOCK: false,
    API: {
      GET: '/open/login'
    },
    PARAMS(params){
      return {
        phone: params.phone,
        password: params.password
      }
    }
  }


};

export default mergeMock(PAGEMOCK, MODULECONF);
