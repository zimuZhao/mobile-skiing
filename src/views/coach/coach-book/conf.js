import {mergeMock} from '../../../public/utils/confUtils'

const PAGEMOCK = true;

const MODULECONF = {

  coachBook: {
    NAME: '预约教练',
    MOCK: true,
    API: {
      GET: '/',
      POST: ''
    },
    getPARAMS(params){
      return {
        token: params.token
      }
    },
    postPARAMS(params){
      return {
        username: params.username,
        phone: params.phone,
        remark: params.remark,
        address: params.address,
        pickup: params.pickup,
        token: params.token
      }
    }
  }

};

export default mergeMock(PAGEMOCK, MODULECONF);
