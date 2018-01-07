import {mergeMock} from '../../../public/utils/confUtils'

const PAGEMOCK = true;

const MODULECONF = {

  buyDetail: {
    NAME: '商品详情',
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
