<style lang="less">
  html, body {
    background-color: #fafafa;
    -webkit-overflow-scrolling: touch;
    user-select: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .page-back {
    display: inline-block;
    position: absolute;
    top: 12px;
    left: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    i {
      font-size: 24px;
      line-height: 40px;
    }
  }

  .page-title {
    display: block;
    margin: 20px auto;
    text-align: center;
    font-size: 20px;
    line-height: 1;
  }
</style>

<template>
  <div id="app">
    <div class="page-back" v-if="visible" @click="$router.go(-1)">
      <i class="mintui mintui-back"/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'mobileSkiing',
    computed: {
      visible() {
        return ['/', '/header', '/search'].indexOf(this.$route.path) < 0;
      }
    }
  }
</script>
