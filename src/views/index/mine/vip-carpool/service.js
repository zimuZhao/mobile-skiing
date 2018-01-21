import Q from 'q';
import API from '@/public/utils/api';
import CONF from '@/views/index/conf';

const M = CONF['mineVIPcarpool'];

export default {

  post(params = {}){

    const paramsSend = M.PARAMS(params);
    console.log(`------------------${M.NAME}请求参数------------------------`);
    console.log(JSON.stringify(paramsSend));

    return Q.Promise((resolve, reject) => {
      API.post(M['API']['POST'], paramsSend).then((data) => {
        const rtnData = {
          moduleData: data
        };
        resolve(rtnData);
      });
    });
  }

}
