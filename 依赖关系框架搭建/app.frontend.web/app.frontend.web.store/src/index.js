export const STATE = {
  TITLE: 'title'
}

export const MUTATION = {
  SET_TITLE: 'setTitle'
}

export default {
  state: {
    [STATE.TITLE]: 0
  },
  mutations: {
    [MUTATION.SET_TITLE] (state, value) {
      state[STATE.TITLE] = value
    }
  }
}
