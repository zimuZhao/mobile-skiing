import Mock from 'mockjs';
import CONF from '@/views/index/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  login: {
    API: {
      GET: {
        "status": "true",
        "sign": "true",
        "result": {
          "nick": "喜羊羊",
          "role": "super",
          "phone": "118114",
          "photo": null,
          "stk": "FA4B2A1D60B62AC318FCA367E3C0BE1B2C955A10046E99B82D483942507DE7A6648DC94C408B4946A930ED25ABED2F65AD0FBFE1C13EE59D361CC7BD69788187"
        }
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
