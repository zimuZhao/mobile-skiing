import Mock from 'mockjs';
import CONF from '@/views/manage/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  coachDetail: {
    API: {
      GET: {
        "status": 'true',
        "sign": 'true',
        'result': {
          id: '111',
          name: '赵教练',
          type: '单板',
          level: '二级',
          certificate: 'XX证书',
          price: '100',
          phone: '1223344',
          intro: '这里是教练介绍'
        }
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
