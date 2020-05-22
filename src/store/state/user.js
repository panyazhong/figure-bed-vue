import {getToken} from '@/utils/cookie'
const user = {
  userInfo: {},
  token: getToken(),
  loginDialog: false,
  start_time: ''
}

export default user