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
        return ['/', '/manage'].indexOf(this.$route.path) < 0;
      }
    }
  }
</script>

<style lang="less">
  html, body {
    padding: 0;
    margin: 0;
    background-color: #f4f4f4;
    font-family: "微软雅黑";
    font-size: 12px;
    color: rgb(102, 102, 102);
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
    top: 0.1em;
    left: 1.5em;
    text-align: center;
    i {
      font-size: 1.3em;
      line-height: 2.5em;
    }
  }

  .page-title {
    display: block;
    margin: 0;
    height: 2.5em;
    line-height: 2.5em;
    text-align: center;
    font-size: 1.3em;
    color: #000;
    background-color: #fff;
  }
</style>

