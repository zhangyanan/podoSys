import server from '@/models/notice'

export const NOTICE_GET_LIST = 'NOTICE_GET_LIST'
export const NOTICE_RECEIVE_LIST = 'NOTICE_RECEIVE_LIST'

export const URGENT_GET_LIST = 'URGENT_GET_LIST'
export const URGENT_RECEIVE_LIST = 'URGENT_RECEIVE_LIST'

const state = {
  fullList: [],
  urgentList:[]
}

const getters = {
  fullList: state => state.fullList,
  urgentList: state => state.urgentList,
  normalList: state => state.fullList,
  importantList: state => state.fullList
}

const actions = {
  getNoticeList ({ commit }) {
    server.getNoticeList().then(response => {
      commit(NOTICE_RECEIVE_LIST, response.data)
    })
  },
  getUrgentList ({ commit }) {
    server.getUrgentList().then(response => {
      commit(URGENT_RECEIVE_LIST, response.data)
    })
  }
}

const mutations = {
  [NOTICE_RECEIVE_LIST] (state, data) {
    state.fullList.length = 0
    state.fullList = data
  },
  [URGENT_RECEIVE_LIST] (state, data) {
    state.urgentList.length = 0
    state.urgentList = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
