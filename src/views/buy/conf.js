import {mergeMock} from '../../public/utils/confUtils'

const PAGEMOCK = true;

const MODULECONF = {

  buy: {
    NAME: '限时团购',
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
