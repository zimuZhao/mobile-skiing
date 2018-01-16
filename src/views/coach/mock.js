import Mock from 'mockjs';
import CONF from '@/views/coach/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  coachList: {
    API: {
      GET: {
        "status": 'true',
        "sign": 'true',
        'result|5': [
          {
            href: '123',
            src: require('../../assets/images/home-swipe1.jpg'),
            name: '赵教练',
            type: '单板',
            level: '二级',
            certificate: 'XX证书',
            price: '100',
            // deadline: '2018-01-01 00:00:00'
          }
        ]
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
