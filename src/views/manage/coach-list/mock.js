import Mock from 'mockjs';
import CONF from '@/views/manage/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  coachList: {
    API: {
      GET: {
        "status": 'true',
        "sign": 'true',
        'result|5': [{
          id: '111',
          name: '赵教练',
          type: '单板',
          level: '二级',
          certificate: 'XX证书',
          price: '100'
        }]
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
