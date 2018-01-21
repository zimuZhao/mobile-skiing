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
  }

};

export default mergeMock(PAGEMOCK, MODULECONF);
