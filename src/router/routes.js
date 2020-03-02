const test =
  process.env.NODE_ENV === 'test'
    ? require('../components/test.vue')
    : /* istanbul ignore next */ () => import(/* webpackChunkName: "test" */ '../components/test.vue')
const classView =
  process.env.NODE_ENV === 'test'
    ? require('../components/class-view.vue')
    : /* istanbul ignore next */ () => import(/* webpackChunkName: "class" */ '../components/class-view.vue')
export {
  test,
  classView
}
