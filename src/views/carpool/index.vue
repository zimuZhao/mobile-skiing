<template>
  <div class="recommend-buy">
    <h1 class="page-title">{{moduleName}}</h1>

    <div class="three-btn">
      <div class="btn-flex" @click="allClick">
        <div class="btn-sty">按出发时间</div>
      </div>
      <div class="btn-flex" @click="singleClick">
        <div class="btn-sty">车主发布</div>
      </div>
      <div class="btn-flex" @click="doubleClick">
        <div class="btn-sty">乘客发布</div>
      </div>
    </div>

    <div class="page-infinite-wrapper" ref="wrapper" :style="{height: wrapperH + 'px'}">
      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
          infinite-scroll-distance="50">
        <li v-for="(item,idx) in list" :key="idx" class="page-infinite-listitem">
          <a :href="'#/carpool/detail/' + item.href">
            <div class="product-info-box">
              <div class="product-name">
                <span>{{item.name}}</span>
              </div>
              <div class="gray-pro-info">目的地: {{item.destination}}</div>
              <div class="gray-pro-info">出发日期：{{item.date}}</div>
              <div class="gray-pro-info">价格（¥）/人: {{item.price}} / h</div>
              <v-progress :value="Number(item.review)" class="pro-review">
                <div slot="start">评分：</div>
                <div slot="end">{{item.review}}</div>
              </v-progress>
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
    Spinner as vSpinner,
    Progress as vProgress
  } from 'mint-ui';
  import Service from './service';

  export default {
    name: 'Carpool',
    components: {
      vSpinner,
      vProgress
    },
    data(){
      return {
        moduleName: '',
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
      allClick(){
        const _this = this;
        _this.list.splice(0, _this.list.length);
        _this.serviceGet();
      },
      singleClick(){
        const _this = this;
        _this.list.splice(0, _this.list.length);
        _this.serviceGet();
      },
      doubleClick(){
        const _this = this;
        _this.list.splice(0, _this.list.length);
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
        padding-left: 0;
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

            .pro-review {
              font-size: 12px;
              max-width: 200px;
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
