<template>
  <div class="recommend-buy">
    <h1 class="page-title">限时团购</h1>

    <div class="three-btn">
      <div class="btn-flex">
        <div class="btn-sty">
          发布时间
        </div>
      </div>
      <div class="btn-flex" @click="salesClick">
        <div class="btn-sty">
          按销量
          <span :class="salesArrow ? 'arrow-up' : 'arrow-down'"/>
        </div>
      </div>
      <div class="btn-flex" @click="priceClick">
        <div class="btn-sty">
          按价格
          <span :class="priceArrow ? 'arrow-up' : 'arrow-down'"/>
        </div>
      </div>
    </div>

    <div class="page-infinite-wrapper" ref="wrapper" :style="{height: wrapperH + 'px'}">
      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
          infinite-scroll-distance="50">
        <li v-for="item in list" class="page-infinite-listitem">
          <a href="#/buy/detail">
            <div class="pro-img">
              <img alt="" src="../../assets/images/home-swipe1.jpg"/>
            </div>
            <div class="product-info-box">
              <div class="product-name">
                <span>商品名最长不超过18个字</span>
              </div>
              <div class="product-price-m">总价：¥ 499.00</div>
              <div class="product-price-m">定金：¥ 100.00</div>
              <div class="gray-pro-info">起购人次: <span>10000</span></div>
              <div class="gray-pro-info">截止时间: <span>2018-01-31 00:00:00</span></div>
            </div>
          </a>
        </li>
      </ul>

      <p v-show="loading" class="page-infinite-loading">
        <v-spinner type="fading-circle"></v-spinner>
        加载中...
      </p>
    </div>

  </div>
</template>

<script>
  import{
    Spinner as vSpinner
  } from 'mint-ui';

  export default {
    name: 'RecommendBuy',
    components: {
      vSpinner
    },
    data(){
      return {
        salesArrow: true,     // true: arrow-up  false: arrow-down
        priceArrow: false,
        // wrapper
        list: [],
        loading: false,
        allLoaded: false,
        wrapperH: 0
      }
    },
    mounted(){
      const _this = this;
      _this.wrapperH = document.documentElement.clientHeight - _this.$refs.wrapper.getBoundingClientRect().top;
      for (let i = 1; i < 31; i++) {
        _this.list.push(i);
      }
    },
    methods: {
      salesClick(){
        const _this = this;
        _this.salesArrow = !_this.salesArrow;
      },
      priceClick(){
        const _this = this;
        _this.priceArrow = !_this.priceArrow;
      },
      loadMore(){
        const _this = this;
        _this.loading = true;
        setTimeout(() => {
          let last = _this.list[_this.list.length - 1];
          for (let i = 1; i < 10; i++) {
            _this.list.push(last + i);
          }
          _this.loading = false;
        }, 2500);
      }
    }
  }
</script>

<style scoped lang="less">
  .recommend-buy {

    .three-btn {
      display: flex;
      margin-top: 5px;
      background-color: #ffffff;

      .btn-flex {
        flex: 1;
      }

      .btn-sty {
        position: relative;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
        border: 1px solid #eee;

        .arrow-down {
          position: absolute;
          right: 15px;
          top: 18px;
          width: 0;
          height: 0;
          content: "";
          border: 4px solid transparent;
          border-top: 4px solid #000;
          font-size: 0;
          line-height: 0;
        }

        .arrow-up {
          position: absolute;
          right: 15px;
          top: 18px;
          width: 0;
          height: 0;
          content: "";
          border: 4px solid transparent;
          border-bottom: 4px solid #000;
          font-size: 0;
          line-height: 0;
        }
      }

    }

    .page-infinite-wrapper {
      margin-top: -1px;
      overflow: scroll;

      ul {
        list-style: none outside none;
      }

      .page-infinite-listitem {
        height: 131px;
        position: relative;
        border-bottom: 1px solid #eee;

        a {
          display: flex;
          height: 100%;
          font-size: 0;
          text-decoration: none;
          background: transparent;

          .pro-img {
            position: relative;
            width: 125px;
            height: 125px;
            overflow: hidden;
            text-align: center;

            img {
              display: inline-block;
              width: auto;
              max-width: 125px;
              height: 125px;
            }
          }

          .product-info-box {
            position: relative;
            flex: 1;
            height: 100%;
            margin-left: 10px;
            padding-top: 5px;

            .product-name {
              display: flex;
              margin-bottom: 5px;
              color: #232326;
              font-size: 15px;
              line-height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              word-break: break-word;
            }

            .gray-icon {
              height: 29px;
              margin: 0;
              overflow: hidden;
              line-height: 29px;
            }

            .product-price-m {
              width: 100%;
              height: 20px;
              margin-right: 10px;
              font-size: 12px;
              color: #f23030;
              line-height: 20px;
              overflow: hidden;

              span {
                font-size: 15px;
              }
            }

            .gray-pro-info {
              color: #848689;
              font-size: 13px;
              display: -webkit-box;
              display: box;
              margin-top: 8px;
              overflow: hidden;
              height: 15px;
              line-height: 16px;
              -webkit-box-align: center;
              box-align: center;
            }

          }
        }

        a:visited {
          text-decoration: none;
        }
      }

      .page-infinite-listitem:first-child {
        border-top: 1px solid #eee;
      }

    }
  }
</style>
