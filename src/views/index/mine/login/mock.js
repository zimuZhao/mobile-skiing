import Mock from 'mockjs';
import CONF from '@/views/index/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  login: {
    API: {
      GET: {
        "status": 'true',
        "sign": 'true',
        result: {
          name: 'test',
          level: 'VIP会员'
        }
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
