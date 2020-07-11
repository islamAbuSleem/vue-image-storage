<template>
  <div id="app">
    <appHead></appHead>
        <router-view/>
  </div>
</template>

<script>

import appHead from './components/header'
export default {
  name: 'app',
  components:{
    appHead,
  }
}
</script>

<style lang="scss">
  #app{
    padding-top: 10px;
  }
</style>
