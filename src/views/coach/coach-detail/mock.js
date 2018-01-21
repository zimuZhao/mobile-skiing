import Mock from 'mockjs';
import CONF from '@/views/coach/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  coachDetail: {
    API: {
      GET: {
        "status": 'true',
        "sign": 'true',
        result: {
          imgs: [{
            src: require('../../../assets/images/home-swipe1.jpg')
          }],
          name: '赵教练',
          type: '单板',
          level: '二级',
          certificate: 'XX证书',
          price: '100',
          phone:'12321312312',
          // deadline: '2018-01-01 00:00:00',
          coachDescribe: '教练描述在这里'
        }
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
