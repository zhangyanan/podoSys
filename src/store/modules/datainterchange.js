import server from '@/models/workarea'
//选中的用户
export const NOTICE_GET_SELECTED_USER = 'NOTICE_GET_SELECTED_USER'
export const NOTICE_SET_SELECTED_USER = 'NOTICE_SET_SELECTED_USER'
//选中的活动
export const NOTICE_GET_SELECTED_ACTIVITY = 'NOTICE_GET_SELECTED_ACTIVITY'
export const NOTICE_SET_SELECTED_ACTIVITY = 'NOTICE_SET_SELECTED_ACTIVITY'
//选中将要变更的gg状态
export const NOTICE_GET_SELECTED_GG_STATUES = 'NOTICE_GET_SELECTED_GG_STATUES'
export const NOTICE_SET_SELECTED_GG_STATUES = 'NOTICE_SET_SELECTED_GG_STATUES'

const state = {
    selectedUser:"",
    selectedActivity:"",
    selectedGGStatus:"",
    //state: JSON.parse(sessionStorage.getItem('selectedGG')) || {},
}

const getters = {
    selectedUser: state => state.selectedUser,
    selectedActivity: state => state.selectedActivity,
    selectedGGStatus: state => state.selectedGGStatus,
}

const actions = {
  setSelectedUser ({ commit }, data) {
    commit(NOTICE_SET_SELECTED_USER, data)
  },

  setSelectedActivity ({ commit }, data) {
    commit(NOTICE_SET_SELECTED_ACTIVITY, data)
  },

  setSelectedGGStatus ({ commit }, data) {
    commit(NOTICE_SET_SELECTED_GG_STATUES, data)
  },
  /*getSelectedUser({ commit }){
    return this.selectedUser
  }*/
}

const mutations = {
  [NOTICE_SET_SELECTED_USER] (state, data) {
    //console.log(data)
    state.selectedUser = data
  },
  [NOTICE_SET_SELECTED_ACTIVITY] (state, data) {
    //console.log(data)
    state.selectedActivity = data
  },
  [NOTICE_SET_SELECTED_GG_STATUES] (state, data) {
    //console.log(data)
    state.selectedGGStatus = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}