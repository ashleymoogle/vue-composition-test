import Vue from 'vue'
import Router from 'vue-router'
import { provide, inject, reactive } from '@vue/composition-api'

import { classView } from './routes.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: require('../components/test.vue').default,
        mobile: require('../components/test.vue').default
      }
    }, {
      path: '/class/:name',
      name: 'class',
      components: {
        default: classView,
        mobile: classView
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  await next()
})

const RouterSymbol = Symbol()

export function provideRouter() {
  provide(RouterSymbol, reactive(router))
}

export function useRouter() {
  const router = inject(RouterSymbol)
  if (!router) {
    // throw error, no store provided
  }
  return router
}

export default router
