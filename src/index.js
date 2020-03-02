/**
 * @module app
 */

import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api';
import Vuelidate from 'vuelidate'
import TreeView from "vue-json-tree-view"

import store from './store'
import router from './router'
import i18n from './locales'

import App from './App.vue'

const style = {
  green: '#5fb96e',
  lightGreen: '#f4faf5',
  grey: '#9b9b9b',
  greyish: '#4a4a4a',
  black: '#282b30',
  pumpkin: '#f5a623',
  blue: '#3e4ffb',
  red: '#ec4257'
}

Vue.use(VueCompositionApi);

Vue.use(Vuelidate)

Vue.use(TreeView)

Vue.prototype.$mobile = window.innerWidth <= 720
// Init vue
export default new Vue({
  i18n,
  router,
  store,
  el: '#app',
  render: h => h(App)
})
