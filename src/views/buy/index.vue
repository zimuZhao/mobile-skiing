<template>
  <div class="recommend-buy">
    <h1 class="page-title">{{moduleName}}</h1>

    <div class="three-btn">
      <div class="btn-flex" @click="timeClick">
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
        <li v-for="(item,idx) in list" :key="idx" class="page-infinite-listitem">
          <a :href="'#/buy/detail/' + item.href">
            <div class="pro-img">
              <img :alt="item.name" :src="item.src"/>
            </div>
            <div class="product-info-box">
              <div class="product-name">
                <span>{{item.name}}</span>
              </div>
              <div class="product-price-m">总价：¥ {{item.total}}</div>
              <span class="product-price-m pro-deposit">定金：¥ {{item.deposit}}</span>
              <div class="m-t-10">
                <div class="gray-pro-info pull-left">起购人次: <span>{{item.count}}</span></div>
                <div class="gray-pro-info pull-right">截止时间: <span>{{item.deadline}}</span></div>
              </div>
            </div>
          </a>
        </li>
      </ul>

      <p v-show="loading" class="page-infinite-loading">
        <v-spinner type="double-bounce" color="#26a2ff"/>
      </p>
    </div>

  </div>
</template>

<script>
  import{
    Spinner as vSpinner
  } from 'mint-ui';
  import Service from './service';

  export default {
    name: 'Buy',
    components: {
      vSpinner
    },
    data(){
      return {
        moduleName: '',
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
    },
    methods: {
      timeClick(){
        const _this = this;
        _this.list.splice(0, _this.list.length);
        _this.serviceGet();
      },
      salesClick(){
        const _this = this;
        _this.list.splice(0, _this.list.length);
        _this.salesArrow = !_this.salesArrow;
        _this.serviceGet();
      },
      priceClick(){
        const _this = this;
        _this.list.splice(0, _this.list.length);
        _this.priceArrow = !_this.priceArrow;
        _this.serviceGet();
      },
      loadMore(){
        const _this = this;
        _this.loading = true;
        _this.serviceGet();
        _this.loading = false;
      },
      serviceGet() {
        const _this = this;
        Service.get({}).then((data) => {
          _this.moduleName = data.moduleName;
          for (const item of data.moduleData) {
            _this.list.push(item);
          }
        });
      }
    }
  }
</script>

<style lang="less">
  .recommend-buy {

    .m-t-10 {
      margin: 10px 10px 10px 0;
    }

    .pull-left {
      float: left;
    }

    .pull-right {
      float: right;
    }

    .three-btn {
      display: flex;
      background-color: #ffffff;

      .btn-flex {
        flex: 1;
      }

      .btn-sty {
        position: relative;
        height: 2.5em;
        padding: 0.1em 0;
        line-height: 2.5em;
        text-align: center;
        border-top: 1px solid #d7d7d7;
        border-left: 1px solid #d7d7d7;
        border-bottom: 1px solid #d7d7d7;

        .arrow-down {
          position: absolute;
          right: 15px;
          top: 12px;
          width: 0;
          height: 0;
          content: "";
          border: 4px solid transparent;
          border-top: 4px solid #666;
          font-size: 0;
          line-height: 0;
        }

        .arrow-up {
          position: absolute;
          right: 15px;
          top: 12px;
          width: 0;
          height: 0;
          content: "";
          border: 4px solid transparent;
          border-bottom: 4px solid #666;
          font-size: 0;
          line-height: 0;
        }
      }

    }

    .page-infinite-wrapper {
      margin-top: -1px;
      overflow: scroll;

      ul {
        padding-left: 0;
        list-style: none outside none;
      }

      .page-infinite-listitem {
        height: 105px;
        margin-bottom: 10px;
        padding: 10px 0;
        position: relative;
        background-color: #fff;
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
              max-width: 100px;
              height: 100px;
              border:1px solid #dcdcdc;
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

            .pro-deposit {
              padding: 1px 5px 1px 0px;
              background-color: #ff545d;
              color: #fff;
              border-radius: 5px;
            }

            .gray-pro-info {
              color: #848689;
              font-size: 12px;
              display: inline-block;
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

    .page-infinite-loading {
      text-align: center;
      div {
        display: inline-block;
      }
    }
  }
</style>
