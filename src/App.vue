<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {}
  }
</script>

<style lang="scss">
  @import './styles/globals';
  #app {
    width:100%;
    height:100%;
  }
</style>
