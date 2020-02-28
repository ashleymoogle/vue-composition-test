<template>
  <div>
    <div class="name">
      {{ $t(`${item}`) }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tooltipNormal',
    props: {
      item: String
    }
  }
</script>

<style lang="scss" scoped>

</style>
