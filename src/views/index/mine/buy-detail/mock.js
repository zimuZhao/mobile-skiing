import Mock from 'mockjs';
import CONF from '@/views/index/mine/buy-detail/conf'
import {initMock} from '@/public/utils/confUtils';

const mockData = {
  mineBuyDetail: {
    API: {
      GET: {
        "status": 'true',
        "sign": 'true',
        'result': {
          src: require('../../../../assets/images/home-swipe1.jpg'),
          name: '商品名最长不超过18个字',
          total: '499.00',
          deposit: '100.00',
          count: '10000',
          deadline: '2018-01-01 00:00:00',
          pickupAds: '北京市通州区',  // 自提地址
          freight: '100.00', // 邮费
          status: '待尾款',
          restTime: '2018-10-10 00:00:00',
          username: '赵赵',
          phone: '1234567890',
          remark: '白色，35',
          address: '北京市通州区星悦国际',
          pickup: '线下自提',
          rest: 190.00
        }
      }
    }
  }
};

export default initMock(Mock, CONF, mockData);
