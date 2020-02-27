const test =
  process.env.NODE_ENV === 'test'
    ? require('../components/test.vue')
    : /* istanbul ignore next */ () => import(/* webpackChunkName: "test" */ '../components/test.vue')
export {
  test
}
