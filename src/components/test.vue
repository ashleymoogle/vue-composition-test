<template>
  <div class="wrapper">
    <h1>
      {{ $t('hello')}}
    </h1>
    <div class="btn-data">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </div>
    <div>
      <button @click="increment">
        Increment
      </button>
    </div>
  </div>
</template>

<script>
  import { reactive, computed } from '@vue/composition-api'
  export default {
    setup() {
      const state = reactive({
        count: 0,
        double: computed(() => state.count * 2)
      })

      function increment() {
        state.count++
      }

      return {
        state,
        increment
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 20px;
    .btn-data {
      color: $aqua;
      margin-bottom: 20px;
    }
  }
</style>
