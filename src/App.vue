<template>
  <div id="app">
    <appHeader></appHeader>
        <router-view/>
  </div>
</template>

<script>

import appHeader from './components/appHeader.vue'
export default {
  name: 'app',
  components:{
    appHeader,
  }
}
</script>

<style lang="scss">
  #app{
    padding-top: 10px;
  }
</style>
