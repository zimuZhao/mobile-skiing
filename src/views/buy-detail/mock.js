import Mock from 'mockjs';
import CONF from '@/views/buy-detail/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  buyDetail: {
    API: {
      GET: {
        code: 200,
        msg: "成功",
        data: {
          imgs: [{
            src: require('../../assets/images/home-swipe1.jpg')
          }, {
            src: require('../../assets/images/home-swipe1.jpg')
          }, {
            src: require('../../assets/images/home-swipe1.jpg')
          }, {
            src: require('../../assets/images/home-swipe1.jpg')
          }, {
            src: require('../../assets/images/home-swipe1.jpg')
          }],
          name: '商品名最长不超过18个字',
          total: '499.00',
          deposit: '100.00',
          count: '10000',
          deadline: '2018-01-01 00:00:00',
          goodsDescribe: '商品描述在这里在这里在这里在这里在这里在这里',
          specifications: '规格参数在这里在这里在这里在这里'
        }
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
