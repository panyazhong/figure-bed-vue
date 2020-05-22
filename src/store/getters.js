const getters = {
  userInfo: state => state.user.userInfo,
  loginDialog: state => state.user.loginDialog,
  token: state => state.user.token,
  start_time: state => state.user.start_time
}

export default getters