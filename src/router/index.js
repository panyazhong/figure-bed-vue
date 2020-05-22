import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(VueRouter)

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home/index')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/find',
        name: 'Find',
        component: () => import('../views/Find/index')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/personal',
        name: 'Personal',
        component: () => import('../views/UserInfo/index')
      }
    ]
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/upload',
          name: 'Upload',
          component: () => import('../views/Upload/index')
        }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
