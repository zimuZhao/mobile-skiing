import Mock from 'mockjs';
import CONF from '@/views/index/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  mineVIP: {
    API: {
      GET: {
        "status": 'true',
        "sign": 'true',
        result: {
          price: '100.00',
          expire: '1'
        }
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
