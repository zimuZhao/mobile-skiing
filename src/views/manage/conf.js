import {mergeMock} from '../../public/utils/confUtils'

const PAGEMOCK = true;

const MODULECONF = {

  buyAdd: {
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
        // endTime: Date.parse(params.deadline)/1000
        payTime: params.restDeadline,      // 尾款支付时间
        image: '',                         // 商品封面 ---------------------待协商图片上传规则
        sendPrice: params.post             // 商品邮费
      }
    }
  },
  buyList: {
    NAME: '团购订单',
    MOCK: true,
    API: {
      GET: '/'
    },
    PARAMS(params){
      return {
        token: params.token
      }
    }
  },
  vipSet: {
    NAME: 'VIP设置',
    MOCK: true,
    API: {
      POST: '/admin/vipSet'
    },
    PARAMS(params){
      return {
        vipPrice: params.vipPrice,
        vipExpiry: params.vipExpiry
      }
    }
  },
  coachAdd: {
    NAME: '添加教练',
    MOCK: true,
    API: {
      POST: '/admin/addCoach'
    },
    PARAMS(params){
      return {
        coachname: params.coachname,
        teachType: params.teachType,
        level: params.level,
        certificate: params.certificate,
        phone: params.phone,
        price: params.price,
        intro: params.intro,
        image: ''                         // 教练图片 ---------------------待协商图片上传规则
      }
    }
  }

};

export default mergeMock(PAGEMOCK, MODULECONF);
