import Mock from 'mockjs';
import CONF from '@/views/carpool/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  carpoolDetail: {
    API: {
      GET: {
        "status": 'true',
        "sign": 'true',
        result: {
          destination: 'XX雪山',
          name: '@pick(["乘客 - 大木头","车主 - 咿呀咿呀哟"])',
          date: '2018-01-01 16:30',
          review: '80',   // 0~100
          price: '100',
          tripDescribe: '活动、行程信息在这里描述',
          carDescribe: '这里是车辆信息简介'
        }
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
