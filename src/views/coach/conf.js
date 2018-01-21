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
  },
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
  },
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
