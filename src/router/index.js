import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/Home',
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
