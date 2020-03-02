<template>
  <div class="main-wrapper">
    <div class="menu">
      <router-link class="item-link" :to="{ name: 'home', params: { userId: 123 }}">Home</router-link>
      <router-link class="item-link" :to="{ name: 'class', params: { name: 'barbarian' }}">Barbarian</router-link>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
  import { reactive } from '@vue/composition-api'

  export default {
    name: 'menu-bar',
    setup() {
      const state = reactive({
        isLoading: false
      })

      return {
        state
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu {
    display: flex;
    .item-link {
      margin-right: 10px;
    }
    .router-link-active {
      text-decoration: underline;
      font-weight: bolder;
    }
  }
</style>
