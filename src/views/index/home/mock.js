import Mock from 'mockjs';
import CONF from '@/views/index/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
    home: {
      API: {
        GET: {
          code: 200,
          msg: "成功",
          data: [
            {
              name: '团购推荐',
              'list|3': [{
                name: '我是名字',
                price: '33.33',
                img: require('../../../assets/images/home-swipe1.jpg'),
                href: '/#/buy/detail'
              }]
            },
            {
              name: '教练推荐',
              'list|3': [{
                name: '我是名字',
                price: '33.33',
                img: require('../../../assets/images/home-swipe1.jpg'),
                href: '/#/buy/detail'
              }]
            },
            {
              name: '拼车推荐',
              'list|3': [{
                name: '我是名字',
                price: '33.33',
                img: require('../../../assets/images/home-swipe1.jpg'),
                href: '/#/buy/detail'
              }]
            },
            {
              name: '拼住宿推荐',
              'list|3': [{
                name: '我是名字',
                price: '33.33',
                img: require('../../../assets/images/home-swipe1.jpg'),
                href: '/#/buy/detail'
              }]
            },
            {
              name: '二手推荐',
              'list|3': [{
                name: '我是名字',
                price: '33.33',
                img: require('../../../assets/images/home-swipe1.jpg'),
                href: '/#/buy/detail'
              }]
            }
          ]
        }
      }
    }
  }
;

export default initMock(Mock, CONF, mockData);
