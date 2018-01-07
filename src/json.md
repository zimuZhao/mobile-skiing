##### 字段一定要原样传过来，没内容时为空
###### 首页
```json
{
          code: 200,
          msg: "成功",
          data: [
            {
              name: '团购推荐',
              'list|3': [{
                name: '我是名字',
                price: '33.33',
                img: require('../../../assets/images/home-swipe1.jpg'),
                href: '/#/buy/detail'
              }]
            },
            {
              name: '教练推荐',
              'list|3': [{
                name: '我是名字',
                price: '33.33',
                img: require('../../../assets/images/home-swipe1.jpg'),
                href: '/#/buy/detail'
              }]
            },
            {
              name: '拼车推荐',
              'list|3': [{
                name: '我是名字',
                price: '33.33',
                img: require('../../../assets/images/home-swipe1.jpg'),
                href: '/#/buy/detail'
              }]
            },
            {
              name: '拼住宿推荐',
              'list|3': [{
                name: '我是名字',
                price: '33.33',
                img: require('../../../assets/images/home-swipe1.jpg'),
                href: '/#/buy/detail'
              }]
            },
            {
              name: '二手推荐',
              'list|3': [{
                name: '我是名字',
                price: '33.33',
                img: require('../../../assets/images/home-swipe1.jpg'),
                href: '/#/buy/detail'
              }]
            }
          ]
}
```

###### 限时团购
```json
{
        "status": 'true',
        "sign": 'true',
        'result|5': [
          {
            href: '123',
            src: require('../../assets/images/home-swipe1.jpg'),
            name: '商品名最长不超过18个字',
            total: '499.00',
            deposit: '100.00',
            count: '10000',
            deadline: '2018-01-01 00:00:00'
          }
        ]
      }
```
###### 商品详情
```json
{
        "status": 'true',
        "sign": 'true',
        result: {
          imgs: [{
            src: require('../../../assets/images/home-swipe1.jpg')
          }, {
            src: require('../../../assets/images/home-swipe1.jpg')
          }, {
            src: require('../../../assets/images/home-swipe1.jpg')
          }, {
            src: require('../../../assets/images/home-swipe1.jpg')
          }, {
            src: require('../../../assets/images/home-swipe1.jpg')
          }],
          name: '商品名最长不超过18个字',
          total: '499.00',
          deposit: '100.00',
          count: '10000',
          deadline: '2018-01-01 00:00:00',
          goodsDescribe: '商品描述在这里在这里在这里在这里在这里在这里',
          specifications: '规格参数在这里在这里在这里在这里'
        }
      }
```
###### 订单详情-定金结算(get)
```json
{
        "status": 'true',
        "sign": 'true',
        result: {
          src: require('../../../assets/images/home-swipe1.jpg'),
          name: '商品名最长不超过18个字',
          total: '499.00',
          deposit: '100.00',
          count: '10000',
          deadline: '2018-01-01 00:00:00',
          pickupAds: '北京市通州区',  // 自提地址
          freight: '100.00' // 邮费
        }
      }
```
###### 订单详情-尾款结算
```json
 {
         "status": 'true',
         "sign": 'true',
         result: {
           src: require('../../../assets/images/home-swipe1.jpg'),
           name: '商品名最长不超过18个字',
           total: '499.00',
           deposit: '100.00',
           count: '10000',
           deadline: '2018-01-01 00:00:00',
           pickupAds: '北京市通州区',  // 自提地址
           freight: '100.00', // 邮费
           // 新增字段
           username: '赵赵',
           phone: '1234567890',
           remark: '白色，35',
           address: '北京市通州区星悦国际', // 邮寄地址
           pickup: '邮寄',
           rest: 190.00
         }
       }
```
###### 团购交易记录
```json
{
        "status": 'true',
        "sign": 'true',
        'result|5': [{
          name: '商品名最长不超过18个字',
          status: '待尾款',
          total: '499.00',
          orderId: '123', // 查询订单详情用的ID 如果和订单号是一个 该字段省略
          orderNum: '111',   // 订单号
          tradeTime: '2018-01-01 00:00:00', // 交易时间
        }]
      }
```
###### 订单详情
```json
{
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
```
