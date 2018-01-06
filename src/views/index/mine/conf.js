import {mergeMock} from '../../../public/utils/confUtils'

const PAGEMOCK = true;

const MODULECONF = {

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
