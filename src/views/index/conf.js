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
  },
  mineBuy: {
    NAME: '团购交易记录',
    MOCK: true,
    API: {
      GET: '/'
    },
    PARAMS(params){
      return {
        type: params.type,     // 全部 || 团购中 || 待提货
        token: params.token
      }
    }
  },
  mineBuyDetail: {
    NAME: '订单详情',
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
  mineVIP: {
    NAME: '升级VIP',
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
  mineVIPcarpool: {
    NAME: '发布拼车信息',
    MOCK: true,
    API: {
      POST: '/admin/add/carpool'
    },
    PARAMS(params){
      return {
        departure: params.departure,
        destination: params.destination,
        date: params.date,
        price: params.price,
        tripDescribe: params.tripDescribe,
        carDescribe: params.carDescribe
      }
    }
  },

};

export default mergeMock(PAGEMOCK, MODULECONF);
