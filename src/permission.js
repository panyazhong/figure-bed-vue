import router from './router'
import store from '@/store'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'// Progress 进度条样式
import {getToken} from '@/utils/cookie'

router.beforeEach(async (to, from, next) => {
  Nprogress.start()

  if (!getToken()) {
    next()
  } else {
    if (!store.getters.userInfo.role) {
      store.dispatch('GetInfo')
    }
    next()
  }
  Nprogress.done()
})

router.afterEach(() => {
  Nprogress.done()
})