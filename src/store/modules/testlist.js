import server from '@/models/testlist'
import server_w from '@/models/workarea'

export const WORK_GET_LIST_STR = 'WORK_GET_LIST_STR'
export const WORK_RECEIVE_LIST_STR = 'WORK_RECEIVE_LIST_STR'
export const TEST_CONN_RECEIVE_USER_INFO = 'TEST_CONN_RECEIVE_USER_INFO'
export const TEST_CONN_RECEIVE_FORM_VALUE = 'TEST_CONN_RECEIVE_FORM_VALUE'

const state = {
    l_tempStr:"",
    l_userId:"",
    l_userName:"",
    l_telephone:"",
    l_retdata:[],
}

const getters = {
    l_tempStr: state => state.l_tempStr,
    l_userId: state => state.l_userId,
    l_userName: state => state.l_userName,
    l_telephone: state => state.l_telephone,
    l_retdata: state => state.l_retdata,
}

const actions = { 
    //将从底层得到的数据放入store里
    getListStr({ commit }) {
        /*server.getListStr().then(response => {
        commit(WORK_RECEIVE_LIST_STR, response.data)
        })*/
        server_w.getTestStr().then(response => {
            commit(WORK_RECEIVE_LIST_STR, response.data)
            })
    },
    setListStr({commit}, param) {
      commit(WORK_RECEIVE_LIST_STR, param)
    },
    getTestConn({commit}){
      server.getTestConn().then(response => {
        //response.userId = response.userId
        commit(TEST_CONN_RECEIVE_USER_INFO, response)
        //alert(response.userName)
        })
      //因为是异步 所以会立即返回 
      //alert(ret.userName)
    },
    getformvalues({commit}){
      server.getformvalues().then(response => {
        //response.userId = response.userId
        commit(TEST_CONN_RECEIVE_FORM_VALUE, response)
        //alert(response.userName)
        })
      //因为是异步 所以会立即返回 
      //alert(ret.userName)
    }
}

const mutations = {
  [WORK_GET_LIST_STR](state, data) {
    state.l_tempStr = data;
  },
  [WORK_RECEIVE_LIST_STR](state, data) {
    state.l_tempStr = data;
  },
  [TEST_CONN_RECEIVE_USER_INFO](state, data) {
    /*state.l_userName = data.userName;
    state.l_userId = data.userId;
    state.l_telephone = data.telephone;*/
    state.l_retdata = data.data;
  },
  [TEST_CONN_RECEIVE_FORM_VALUE](state, data) {
    /*state.l_userName = data.userName;
    state.l_userId = data.userId;
    state.l_telephone = data.telephone;*/
    state.l_retdata = data.data;
  }
  
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
