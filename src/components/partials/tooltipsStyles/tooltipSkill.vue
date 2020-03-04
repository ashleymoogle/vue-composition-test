<template>
  <div>
    <div class="name">
      {{ $t(`${item}.name`) }}
    </div>
    <div class="desc">
      {{ $t(`${item}.desc`) }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tooltipSkill',
    components: {},
    props: {
      item: String
    }
  }
</script>

<style lang="scss" scoped>
  .name {
    font-weight: bolder;
  }
</style>
