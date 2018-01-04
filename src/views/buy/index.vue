<template>
  <div class="recommend-buy">
    <h1 class="page-title">限时团购</h1>

    <div class="three-btn">
      <div class="btn-flex">
        <div class="btn-sty">
          发布时间
        </div>
      </div>
      <div class="btn-flex" @click.native="salesClick">
        <div class="btn-sty">
          按销量
          <span :class="salesArrow ? 'arrow-up' : 'arrow-down'"/>
        </div>
      </div>
      <div class="btn-flex" @click.native="priceClick">
        <div class="btn-sty">
          按价格
          <span :class="priceArrow ? 'arrow-up' : 'arrow-down'"/>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data(){
      return {
        topImgH: '0px',
        salesArrow: true,     // true: arrow-up  false: arrow-down
        priceArrow: false
      }
    },
    created() {
      const W = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.topImgH = Math.floor(96.00 / 480.00 * W);
    },
    methods: {
      salesClick(val){
        const _this = this;
        _this.salesArrow = !_this.salesArrow;
        console.log(_this.salesArrow)
      },
      priceClick(val){
        const _this = this;
        _this.priceArrow = !_this.priceArrow;
      }
    }
  }
</script>

<style scoped lang="less">
  .recommend-buy {

    .page-title {
      display: block;
      margin: 20px auto;
      text-align: center;
      font-size: 20px;
      line-height: 1;
    }

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
  }
</style>
