import Mock from 'mockjs';
import CONF from '@/views/buy/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  buyDeposit: {
    API: {
      GET: {
        "status": 'true',
        "sign": 'true',
        result: {
          src: require('../../../assets/images/home-swipe1.jpg'),
          name: '商品名最长不超过18个字',
          total: '499.00',
          deposit: '100.00',
          count: '10000',
          deadline: '2018-01-01 00:00:00',
          pickupAds: '北京市通州区',  // 自提地址
          freight: '100.00' // 邮费
        }
      },
      POST: {
        "status": 'true',
        "sign": 'true',
        result: 'successful'
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
