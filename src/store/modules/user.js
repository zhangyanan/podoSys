import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN'
export const USER_SIGNOUT = 'USER_SIGNOUT'
export const GET_USER_IMF = 'GET_USER_IMF'

export default {
  state: JSON.parse(sessionStorage.getItem('user')) || {},
  mutations: {
    [USER_SIGNIN] (state, user) {
      sessionStorage.setItem('user', JSON.stringify(user))
      Object.assign(state, user)
    },
    [USER_SIGNOUT] (state) {
      sessionStorage.removeItem('user')
      Object.keys(state).forEach(k => Vue.delete(state, k))
    },

    [GET_USER_IMF](state) {
      return sessionStorage.getItem('user')
    },
  },
  actions: {
    [USER_SIGNIN] ({commit}, user) {
      console.log(user)
      commit(USER_SIGNIN, user)
    },
    [USER_SIGNOUT] ({commit}) {
      commit(USER_SIGNOUT)
    },
    [GET_USER_IMF]({commit}) {
      commit(GET_USER_IMF)
    },
  }
}
