import user_mutation_types from '../mutation_type/user'

const user_mutation = {
  [user_mutation_types.SET_USERINFO](state, userInfo) {
    state.user.userInfo = userInfo
  },
  [user_mutation_types.SET_TOKEN](state, token) {
    state.user.token = token
  },
  [user_mutation_types.SET_LOGINDIALOG](state, loginDialog) {
    state.user.loginDialog = loginDialog
  },
  [user_mutation_types.SET_START_TIME](state, start_time) {
    state.user.start_time = start_time
  }
}

export default user_mutation
