import server from '@/models/workarea'

export const WORK_GET_LIST = 'WORK_GET_LIST'
export const WORK_RECEIVE_LIST = 'WORK_RECEIVE_LIST'

export const WORK_GET_MENU_LIST = 'WORK_GET_MENU_LIST'
export const WORK_RECEIVE_MENU_LIST = 'WORK_RECEIVE_MENU_LIST'

export const WORK_GET_TEST_STR = 'WORK_GET_TEST_STR'
export const WORK_RECEIVE_TEST_STR = 'WORK_RECEIVE_TEST_STR'

export const WORK_RECEIVE_ANNOUNCEMENT_LIST = 'WORK_RECEIVE_ANNOUNCEMENT_LIST'

const state = {
  announcementList: [],
  workList: [],
  workMenuList:[],
  w_tempStr:"work1"
}

const getters = {
    announcementList: state => state.announcementList,
    workList: state => state.workList,
    workMenuList: state => state.workMenuList,
    w_tempStr: state => state.w_tempStr
}

const actions = {
  getAnnouncementList({ commit }) {
    server.getAnnouncementList().then(response => {
      commit(WORK_RECEIVE_ANNOUNCEMENT_LIST, response.data)
    })
  },
  getWorkList ({ commit }) {
    server.getWorkList().then(response => {
      commit(WORK_RECEIVE_LIST, response.data)
    })
  },
  getWorkMenuList ({ commit }) {
    server.getWorkMenuList().then(response => {
      commit(WORK_RECEIVE_MENU_LIST, response.data)
    })
  },
  //将从底层得到的数据放入store里
  getTestStr({ commit }) {
    //取得后端的数据
    /*server.getTestStr().then(response => {
      commit(WORK_RECEIVE_TEST_STR, response.data)
    })*/
    //取得本地的数据
    return state.w_tempStr
  },
  setTestStr({commit}, param) {
      commit(WORK_RECEIVE_TEST_STR, param)
  }
}

const mutations = {
  [WORK_RECEIVE_ANNOUNCEMENT_LIST] (state, data) {
    state.announcementList.length = 0
    state.announcementList = data
  },
  [WORK_RECEIVE_LIST] (state, data) {
    state.workList.length = 0
    state.workList = data
  },
  [WORK_RECEIVE_MENU_LIST] (state, data) {
    state.workMenuList.length = 0
    state.workMenuList = data
  },
  /*[WORK_GET_TEST_STR](state, data) {
    state.w_tempStr = data;
  },*/
  [WORK_RECEIVE_TEST_STR](state, data) {
    state.w_tempStr = data;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
