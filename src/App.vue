<template>
  <div id="app">
    <menu-bar>
      <router-view />
    </menu-bar>
  </div>
</template>

<script>
  import menuBar from './components/partials/menus/menu-bar.vue'
  import { provideRouter } from './router'

  export default {
    name: 'App',
    components: { menuBar },
    setup(props, { root: { $router} }) {
      provideRouter($router)
    }
  }
</script>

<style lang="scss">
  @import './styles/globals';
  #app {
    width:100%;
    height:100%;
  }
</style>
