import Q from 'q';
import API from '@/public/utils/api';
import CONF from '@/views/index/mine/buy/conf';

const M = CONF['mineBuy'];
// if (process.env.STATS === 'dev') M.MOCK ? require('./mock') : '';
M.MOCK ? require('./mock') : '';

export default {

  getAll(params = {}){

    const paramsSend = M.PARAMS(params);
    console.log(`------------------${M.NAME}请求参数------------------------`);
    console.log(JSON.stringify(paramsSend));

    return Q.Promise((resolve, reject) => {
      API.get(M['API']['GET'], paramsSend).then((data) => {
        const rtnData = {
          moduleName: M['NAME'],
          moduleData: data
        };
        resolve(rtnData);
      });
    });
  },

  getDeposit(params = {}){

    const paramsSend = M.PARAMS(params);
    console.log(`------------------${M.NAME}请求参数------------------------`);
    console.log(JSON.stringify(paramsSend));

    return Q.Promise((resolve, reject) => {
      API.get(M['API']['GET'], paramsSend).then((data) => {
        const rtnData = {
          moduleData: data
        };
        resolve(rtnData);
      });
    });
  },

  getPickup(params = {}){

    const paramsSend = M.PARAMS(params);
    console.log(`------------------${M.NAME}请求参数------------------------`);
    console.log(JSON.stringify(paramsSend));

    return Q.Promise((resolve, reject) => {
      API.get(M['API']['GET'], paramsSend).then((data) => {
        const rtnData = {
          moduleData: data
        };
        resolve(rtnData);
      });
    });
  }

}
