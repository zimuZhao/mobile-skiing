import Mock from 'mockjs';
import CONF from '@/views/buy/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  buy: {
    API: {
      GET: {
        code: 200,
        msg: "成功",
        'data|5': [
          {
            href: '#/buy/detail',
            src: require('../../assets/images/home-swipe1.jpg'),
            name: '商品名最长不超过18个字',
            total: '499.00',
            deposit: '100.00',
            count: '10000',
            deadline: '2018-01-01 00:00:00'
          }
        ]
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
