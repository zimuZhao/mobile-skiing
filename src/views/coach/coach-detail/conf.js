import {mergeMock} from '../../../public/utils/confUtils'

const PAGEMOCK = true;

const MODULECONF = {

  coachDetail: {
    NAME: '教练介绍',
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
