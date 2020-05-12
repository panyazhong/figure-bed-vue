import {getCookie} from '@/utils/cookie'
const user = {
  userInfo: {},
  token: getCookie('token')
}

export default user