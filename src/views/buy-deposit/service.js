import Q from 'q';
import API from '@/public/utils/api';
import CONF from '@/views/buy-deposit/conf';

const M = CONF['buyDeposit'];
if (process.env.STATS === 'dev') M.MOCK ? require('./mock') : '';

export default {

  get(params = {}){

    const paramsSend = M.getPARAMS(params);
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
  post(params = {}){
    const paramsSend = M.postPARAMS(params);
    console.log(`------------------${M.NAME}表单提交------------------------`);
    console.log(JSON.stringify(paramsSend));

    return Q.Promise((resolve, reject) => {
      API.get(M['API']['POST'], paramsSend).then((data) => {
        const rtnData = {
          moduleData: data
        };
        resolve(rtnData);
      });
    });
  }

}
