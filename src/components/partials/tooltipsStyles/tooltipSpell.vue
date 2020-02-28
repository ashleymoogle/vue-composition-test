<template>
  <div>
    <div class="name">
      {{ $t(`${item}.name`) }}
    </div>
    <div class="type">
      {{ $t(`${item}.type`) }}
    </div>
    <div class="desc">
      {{ $t(`${item}.desc`) }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tooltipSpells',
    props: {
      item: String
    }
  }
</script>

<style lang="scss" scoped>

</style>
