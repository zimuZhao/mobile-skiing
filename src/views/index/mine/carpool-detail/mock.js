import Mock from 'mockjs';
import CONF from '@/views/index/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  mineCarpoolDetail: {
    API: {
      GET: {
        "status": 'true',
        "sign": 'true',
        'result': {
          departure: 'A区B街道',
          destination: 'XX雪山',
          name: '@pick(["乘客 - 大木头","车主 - 咿呀咿呀哟"])',
          date: '2018-01-01 16:30',
          price: '100',
          phone: '1231243'
        }
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
