import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fc207a9c = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _0b1af771 = () => interopDefault(import('../pages/cards/_id.vue' /* webpackChunkName: "pages/cards/_id" */))
const _50806eb5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _fc207a9c,
    name: "admin"
  }, {
    path: "/cards/:id?",
    component: _0b1af771,
    name: "cards-id"
  }, {
    path: "/",
    component: _50806eb5,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
