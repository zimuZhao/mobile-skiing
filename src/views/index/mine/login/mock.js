import Mock from 'mockjs';
import CONF from '@/views/index/mine/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  login: {
    API: {
      GET: {
        code: 200,
        msg: "成功",
        data: {
          name:'test',
          level:'VIP会员'
        }
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
