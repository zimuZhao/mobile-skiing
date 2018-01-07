<template>
  <div>
    <div v-if="!ifLogin">
      <v-login/>
    </div>

    <div v-if="ifLogin">
      <v-center/>
    </div>

  </div>
</template>

<script>
  import {
    Field as vField,
    Button as vButton
  } from 'mint-ui';
  import vLogin from './login/index.vue'
  import vCenter from './center/index.vue'

  export default {
    name: 'IndexMine',
    components: {
      vLogin,
      vCenter
    },
    data(){
      return {
        ifLogin: true
      }
    }
  }
</script>
