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
  }

};

export default mergeMock(PAGEMOCK, MODULECONF);
