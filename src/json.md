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
        code: 200,
        msg: "成功",
        'data|5': [
          {
            href: '#/buy/detail',
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
        code: 200,
        msg: "成功",
        data: {
          imgs: [{
            src: require('../../assets/images/home-swipe1.jpg')
          }, {
            src: require('../../assets/images/home-swipe1.jpg')
          }, {
            src: require('../../assets/images/home-swipe1.jpg')
          }, {
            src: require('../../assets/images/home-swipe1.jpg')
          }, {
            src: require('../../assets/images/home-swipe1.jpg')
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
