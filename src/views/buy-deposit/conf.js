import {mergeMock} from '../../public/utils/confUtils'

const PAGEMOCK = true;

const MODULECONF = {

  buyDeposit: {
    NAME: '订单详情-定金结算',
    MOCK: true,
    API: {
      GET: 'http://guanjia-task.jd.com/task/manager/initManager',
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
