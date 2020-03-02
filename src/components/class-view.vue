<template>
  <div class="wrapper-class">
    <div v-if="!state.isLoading">
      <h1>{{state.rpgClass.content.subsections[0].name}}</h1>
      <tree-view :data="state.rpgClass" :options="{maxDepth: 100}"></tree-view>
    </div>
    <div v-else>
      loading...
    </div>
  </div>
</template>

<script>
  import {onMounted, reactive, ref} from '@vue/composition-api'
  import { useRouter } from '../router'
  export default {
    name: 'class-view',
    components: {},
    setup(props, context) {
      const $router = useRouter()
      const $route = $router.currentRoute

      let a = {}
      const state = reactive({
        isLoading: true,
        rpgClass: {}
      })

      onMounted(async () => {
        const data = await import(`../data/${$route.params.name}`)
        state.rpgClass = JSON.parse(JSON.stringify(data))
        state.isLoading = false
      })

      return {
        state
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper-class {
    padding: 20px;
    .tree-view-wrapper {
      min-height: 20px;
      padding: 19px;
      margin-bottom: 20px;
      background-color: #f5f5f5;
      border: 1px solid #e3e3e3;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
      box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    }
  }
</style>
