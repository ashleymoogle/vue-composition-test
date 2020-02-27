import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      components: {
        default: require('../components/test.vue').default,
        mobile: require('../components/test.vue').default
      },
      meta: {
        index: 1,
        dashboard: true
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  await next()
})

export default router
