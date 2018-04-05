export const STATE = {
  TITLE: 'title',
  USER_INFO: 'userInfo'
}

export const MUTATION = {
  SET_TITLE: 'setTitle',
  SET_USER_INFO: 'setUserInfo'
}

export default {
  state: {
    [STATE.TITLE]: 0,
    [STATE.USER_INFO]: null
  },
  mutations: {
    [MUTATION.SET_TITLE] (state, value) {
      state[STATE.TITLE] = value
    },
    [MUTATION.SET_USER_INFO] (state, value) {
      state[STATE.USER_INFO] = value
    }
  }
}
