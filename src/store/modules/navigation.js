// import Vue from 'vue'

export const NAVIGATION_LAST_VISIT = 'NAVIGATION_LAST_VISIT'
export const NAVIGATION_PATH = 'NAVIGATION_PATH'

export default {
  state: JSON.parse(localStorage.getItem('naviPath')) || {},
  mutations: {
    [NAVIGATION_PATH] (state, path) {
      localStorage.setItem('naviPath', JSON.stringify(path))
      Object.assign(state, path)
    }
  },
  actions: {
    [NAVIGATION_PATH] ({commit}, path) {
      commit(NAVIGATION_PATH, path)
    }
  }
}
