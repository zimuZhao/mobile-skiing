import Mock from 'mockjs';
import CONF from '@/views/index/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
    home: {
      API: {
        GET: {
          "status": 'true',
          "sign": 'true',
          result: [
            {
              name: '团购推荐',
              type: 'buy',
              'list|3': [{
                name: '滑雪板',
                price: '1220',
                img: require('../../../assets/images/home-swipe1.jpg'),
                href: '123'
              }]
            },
            {
              name: '教练推荐',
              type: 'coach',
              'list|3': [{
                name: 'X教练',
                price: '123.45 / h',
                img: require('../../../assets/images/home-swipe1.jpg'),
                href: '123'
              }]
            },
            {
              name: '拼车推荐',
              type: 'carpool',
              'list|3': [{
                name: '目的地',
                price: '10 / 人',
                img: require('../../../assets/images/home-swipe1.jpg'), // 图片区分是车主还是乘客
                href: '123'
              }]
            },
            {
              name: '拼住宿推荐',
              type: 'stay',
              'list|3': [{
                name: '待设计',
                price: '待设计',
                img: require('../../../assets/images/home-swipe1.jpg'),
                href: '123'
              }]
            },
            {
              name: '二手推荐',
              type: 'sechand',
              'list|3': [{
                name: '待设计',
                price: '待设计',
                img: require('../../../assets/images/home-swipe1.jpg'),
                href: '123'
              }]
            }
          ]
        }
      }
    }
  }
;

export default initMock(Mock, CONF, mockData);
