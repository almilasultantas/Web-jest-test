import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0858555d = () => interopDefault(import('..\\pages\\Coffeepage.vue' /* webpackChunkName: "pages/Coffeepage" */))
const _d96c8a34 = () => interopDefault(import('..\\pages\\Loginpage.vue' /* webpackChunkName: "pages/Loginpage" */))
const _218e54ec = () => interopDefault(import('..\\pages\\Productpage.vue' /* webpackChunkName: "pages/Productpage" */))
const _8c35a0a0 = () => interopDefault(import('..\\pages\\Shoppingbasket.vue' /* webpackChunkName: "pages/Shoppingbasket" */))
const _0833410d = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _fb102740 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Coffeepage",
    component: _0858555d,
    name: "Coffeepage"
  }, {
    path: "/Loginpage",
    component: _d96c8a34,
    name: "Loginpage"
  }, {
    path: "/Productpage",
    component: _218e54ec,
    name: "Productpage"
  }, {
    path: "/Shoppingbasket",
    component: _8c35a0a0,
    name: "Shoppingbasket"
  }, {
    path: "/product/:id?",
    component: _0833410d,
    name: "product-id"
  }, {
    path: "/",
    component: _fb102740,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
