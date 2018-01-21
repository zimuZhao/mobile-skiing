import Mock from 'mockjs';
import CONF from '@/views/carpool/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  carpoolList: {
    API: {
      GET: {
        "status": 'true',
        "sign": 'true',
        'result|5': [
          {
            href: '123',
            name: '@pick(["乘客 - 大木头","车主 - 咿呀咿呀哟"])',
            destination: 'XX雪山',
            date: '2018-01-01 16:30',
            review: '80',   // 0~100
            price: '100'
          }
        ]
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
