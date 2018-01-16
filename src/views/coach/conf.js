import {mergeMock} from '../../public/utils/confUtils'

const PAGEMOCK = true;

const MODULECONF = {

  coachList: {
    NAME: '预约教练',
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
