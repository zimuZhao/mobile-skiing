import {mergeMock} from '../../public/utils/confUtils'

const PAGEMOCK = true;

const MODULECONF = {

  manageBuy: {
    NAME: '添加团购商品',
    MOCK: true,
    API: {
      POST: '/admin/addShop'
    },
    PARAMS(params){
      return {
        shopName: params.tradename,        // 商品名称
        deposit: params.deposit,           // 商品定金
        shopPrice: params.total,           // 商品价格
        peopleNo: params.num,              // 起购人次
        shopType: 1,                       // 商品类型（1团购、2二手）
        shopDesc: params.describe,         // 商品  描述
        shopParams: params.param,          // 商品规格
        // startTime: '',                     // 商品开售时间
        endTime: params.deadline,          // 团购截止时间
        payTime: params.restDeadline,      // 尾款支付时间
        image: '',                         // 商品封面 ---------------------待协商图片上传规则
        sendPrice: params.post             // 商品邮费
      }
    }
  }

};

export default mergeMock(PAGEMOCK, MODULECONF);
