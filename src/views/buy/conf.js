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
  },
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
  },
  buyDeposit: {
    NAME: '订单详情-定金结算',
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
