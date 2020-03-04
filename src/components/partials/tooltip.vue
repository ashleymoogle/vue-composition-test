<template>
  <span @mouseleave="toggle($event, false)">
    <div v-if="display" :class="`tooltip ${display ? 'active' : ''}`" :style="state.tooltipStyles">
      <tooltip-normal v-if="type === 'normal'" :item="item" />
      <tooltip-skill v-if="type === 'skill'" :item="item" />
      <tooltip-spell v-if="type === 'spell'" :item="item" />
    </div>
    <span class="element" @mouseover="toggle($event, true)">
      <slot />
    </span>
  </span>
</template>

<script>
  import { reactive, computed, ref } from '@vue/composition-api'
  import tooltipNormal from './tooltipsStyles/tooltipNormal.vue'
  import tooltipSpell from './tooltipsStyles/tooltipSpell.vue'
  import tooltipSkill from './tooltipsStyles/tooltipSkill.vue'
  export default {
    name: 'tooltip',
    components: { tooltipNormal, tooltipSpell, tooltipSkill },
    props: {
      item: String,
      type: {
        default: 'normal',
        type: String
      }
    },
    setup(props) {
      const display = ref(false)
      const state = reactive({
        item: props.item,
        pos: {
          x: 0,
          y: 0
        },
        tooltipStyles: computed(() => {
          const direction = {
            horizontal: window.screen.width - state.pos.x > 500 ? 'left' : 'right',
            vertical: window.screen.height - state.pos.y > 300 ? 'top' : 'bottom',
          }
          const position = {
            x: window.screen.width - state.pos.x > 500 ? state.pos.x : window.screen.width - state.pos.x,
            y: window.screen.height - state.pos.y > 300 ? state.pos.y : window.screen.height - state.pos.y
          }
          return `${direction.horizontal}: ${position.x}px;${direction.vertical}: ${position.y}px;`
        })
      })
      const toggle = (e, bool) => {
        console.log(e)
        state.pos = {
          x: e.clientX,
          y: e.clientY
        }
        display.value = bool
      }
      return {
        display,
        state,
        toggle
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tooltip {
    position: fixed;
    display: none;
    z-index: 10;
    background-color: $super-light-grey;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 10px;
    &.active {
      display: block;
    }
  }
  .element {
    color: $greyish;
    cursor: pointer;
    text-decoration: underline;
  }
</style>
