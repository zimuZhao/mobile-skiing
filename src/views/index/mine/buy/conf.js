import {mergeMock} from '../../../../public/utils/confUtils'

const PAGEMOCK = true;

const MODULECONF = {

  mineBuy: {
    NAME: '团购交易记录',
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
