import Mock from 'mockjs';
import CONF from '@/views/buy/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  buyDetail: {
    API: {
      GET: {
        "status": 'true',
        "sign": 'true',
        result: {
          imgs: [{
            src: require('../../../assets/images/test.jpg')
          }, {
            src: require('../../../assets/images/test.jpg')
          }, {
            src: require('../../../assets/images/test.jpg')
          }, {
            src: require('../../../assets/images/test.jpg')
          }, {
            src: require('../../../assets/images/test.jpg')
          }],
          name: '商品名最长不超过18个字',
          total: '@int(1000,8888)',
          deposit: '@int(1000,8888)',
          count: '@int(100,1000)',
          deadline: '2018-01-01',
          goodsDescribe: '商品描述在这里在这里在这里在这里在这里在这里',
          specifications: '规格参数在这里在这里在这里在这里'
        }
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
