import Mock from 'mockjs';
import CONF from '@/views/buy/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  buy: {
    API: {
      GET: {
        "status": 'true',
        "sign": 'true',
        'result|5': [
          {
            href: '123',
            src: require('../../assets/images/test.jpg'),
            name: '商品名最长不超过18个字',
            total: '@int(1000,8000)',
            deposit: '100.00',
            count: '@Int(10,100)',
            deadline: '2018-01-01'
          }
        ]
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
