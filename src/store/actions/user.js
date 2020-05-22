import {userLoginApi,
  getUserInfoApi} from "@/api/user"
import { setToken } from '@/utils/cookie'
import store from '@/store'

const userAction = {
  async Login({commit}, userInfo) {
    userInfo.user_name = userInfo.user_name.trim()
    userInfo.password = userInfo.password.trim()
    try {
      let loginResult = await userLoginApi(userInfo)
      const {token} = loginResult
      if (token) {
        console.log(setToken(token))
        commit('SET_TOKEN', token)
        commit('SET_LOGINDIALOG', false)
        store.dispatch('GetInfo')
      }
    } catch (error) {
      
    }
  },
  async GetInfo({commit}) {
    try {
      const getResult = await getUserInfoApi()
      const {data} = getResult

      commit('SET_USERINFO', data)
    } catch (error) {
      
    }
  }
}

export default userAction