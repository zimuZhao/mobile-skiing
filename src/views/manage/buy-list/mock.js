import Mock from 'mockjs';
import CONF from '@/views/manage/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  buyList: {
    API: {
      GET: {
        "status": 'true',
        "sign": 'true',
        'result|5': [{
          name: '商品名最长不超过18个字',
          status: '已成团',
          total: '499.00',
          orderId: '123', // 查询订单详情用的ID 如果和订单号是一个 该字段省略
          orderNum: '111',   // 订单号
          tradeTime: '2018-01-01 00:00:00', // 交易时间
        }]
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
