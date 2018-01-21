import {mergeMock} from '../../public/utils/confUtils'

const PAGEMOCK = true;

const MODULECONF = {

  carpoolList: {
    NAME: '拼车服务',
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
  carpoolDetail: {
    NAME: '拼车信息',
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

};

export default mergeMock(PAGEMOCK, MODULECONF);
