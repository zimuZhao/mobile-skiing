import {mergeMock} from '../../public/utils/confUtils'

const PAGEMOCK = true;

const MODULECONF = {

  home: {
    NAME: '首页',
    MOCK: true,
    API: {
      GET: 'http://guanjia-task.jd.com/task/manager/initManager'
    },
    PARAMS(params){
      return {
        token: params.token
      }
    }
  },
  login: {
    NAME: '登录',
    MOCK: true,
    API: {
      GET: 'http://guanjia-task.jd.com/task/manager/initManager'
    },
    PARAMS(params){
      return {
        token: params.token
      }
    }
  }


};

export default mergeMock(PAGEMOCK, MODULECONF);
