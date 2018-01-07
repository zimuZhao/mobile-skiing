import {mergeMock} from '../../public/utils/confUtils'

const PAGEMOCK = true;

const MODULECONF = {

  buyRest: {
    NAME: '订单详情-尾款结算',
    MOCK: true,
    API: {
      GET: '/',
      POST: ''
    },
    PARAMS(params){
      return {
        token: params.token
      }
    }
  }

};

export default mergeMock(PAGEMOCK, MODULECONF);
