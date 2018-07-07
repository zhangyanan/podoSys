import server from '@/models/formitemlist'
import server_w from '@/models/workarea'
import server_c from '@/models/configdata'
import server_db from '@/models/dbconn'

export const TEST_FOR_SET = 'TEST_FOR_SET'

export const TEST_CONN_RECEIVE_USER_INFO = 'TEST_CONN_RECEIVE_USER_INFO'

export const TEST_CONN_RECEIVE_USER_21_MSG = 'TEST_CONN_RECEIVE_USER_21_MSG'
export const TEST_CONN_RECEIVE_ACTIVITY_MSG = 'TEST_CONN_RECEIVE_ACTIVITY_MSG'
export const TEST_CONN_RECEIVE_ONLY_ONE_ACTIVITY_MSG = 'TEST_CONN_RECEIVE_ONLY_ONE_ACTIVITY_MSG'
export const TEST_CONN_RECEIVE_GGSTATUS_MSG = 'TEST_CONN_RECEIVE_GGSTATUS_MSG'

export const TEST_CONN_RECEIVE_FORM_VALUE = 'TEST_CONN_RECEIVE_FORM_VALUE'

//得到gg列表数据
export const GET_GG_IMF_DATA = 'GET_GG_IMF_DATA'
//得到作为协力的gg列表数据
export const GET_OUR_GG_IMF_DATA = 'GET_OUR_GG_IMF_DATA'
//得到个人补充信息
export const GET_PERSONAL_IMF_DATA = 'GET_PERSONAL_IMF_DATA'
//得到个人藏单
export const GET_PERSONAL_FAVORITE_DATA = 'GET_PERSONAL_FAVORITE_DATA'
//得到个人藏单的蝈蝈信息
export const GET_PERSONAL_FAVORITE_DATA_LIST = 'GET_PERSONAL_FAVORITE_DATA_LIST'
//得到个人的阶段
export const GET_PERSONAL_STEP = 'GET_PERSONAL_STEP'
//更改信息
export const TEST_CONN_RECEIVE_UPDATE_MSG = 'TEST_CONN_RECEIVE_UPDATE_MSG'
//更新Store里的活动信息
export const RECEIVE_UPDATE_ACTIVITY_MSG_IN_STORE = 'RECEIVE_UPDATE_ACTIVITY_MSG_IN_STORE'

//返回查询值
export const TEST_CONN_RECEIVE_SEARCH_FORM_VALUE = 'TEST_CONN_RECEIVE_SEARCH_FORM_VALUE'
//返回查询标示
export const TEST_CONN_RECEIVE_SEARCH_STATUS = 'TEST_CONN_RECEIVE_SEARCH_STATUS'

const state = {
    l_tempStr:"",
    l_userId:"",
    l_userName:"",
    l_telephone:"",

    //个人帐户信息
    l_ret_personal_imf_s:[],
    //个人阶段
    l_ret_personal_gg_s:[],

    //个人藏单
    l_ret_personal_favorite_s:[],
    //个人藏单的蝈蝈信息
    l_ret_personal_favorite_list_s:[],

    //某个蝈蝈的21信息
    l_retdata:[],
    l_retkeyname:[],

    //某个gg的全部活动信息
    l_retactivitydata:[],
    l_retkeyactivityname:[],

    //单条活动信息
    l_retOnlyOneActivityData:[],

    //gg状态标签
    l_ret_gg_status_data:[],

    //gg列表数据
    l_ret_gg_imf_s:[],
    //作为管理员的gg列表
    l_ret_our_gg_imf_s:[],

    //搜索的返回值
    l_ret_search_data:[],
    //搜索的标示
    l_ret_search_none:"",
}

const getters = {
    l_tempStr: state => state.l_tempStr,
    l_userId: state => state.l_userId,
    l_userName: state => state.l_userName,
    l_telephone: state => state.l_telephone,

    //个人补充信息
    l_ret_personal_imf_s: state => state.l_ret_personal_imf_s,
    //个人阶段
    l_ret_personal_gg_s: state => state.l_ret_personal_gg_s,
    //个人藏单
    l_ret_personal_favorite_s: state => state.l_ret_personal_favorite_s,
    //个人藏单的蝈蝈信息
    l_ret_personal_favorite_list_s: state => state.l_ret_personal_favorite_list_s,
    
    //基本信息
    l_retdata: state => state.l_retdata,
    l_retkeyname: state => state.l_retkeyname,

    //活动信息
    l_retactivitydata: state => state.l_retactivitydata,
    l_retkeyactivityname: state => state.l_retkeyactivityname,

    l_retOnlyOneActivityData: state => state.l_retOnlyOneActivityData,

    //gg状态标签
    l_ret_gg_status_data: state => state.l_ret_gg_status_data,

    //gg列表数据
    l_ret_gg_imf_s: state => state.l_ret_gg_imf_s,

    //搜索的返回值
    l_ret_search_data: state => state.l_ret_search_data,

    //搜索的标示
    l_ret_search_none: state => state.l_ret_search_none,
}

const actions = { 
    getfolderlist({commit}){
      server.getfolderlist().then(response => {
        //response.userId = response.userId
        commit(TEST_CONN_RECEIVE_USER_INFO, response)
        //alert(response.userName)
        })
      //因为是异步 所以会立即返回 
      //alert(ret.userName)
    },

    linkAnotherPage(ret_search_data, url)  {
        //设置查询结果集
        sessionStorage.setItem('g_searchList', ret_search_data)
        //直接跳转到对应页面
        window.location.href = url
    },

    //按照名字或微信进行查询
    getFormValuesByName({commit}, data){   
      server.get21FormValuesByName(data).then(response => {
        var num = response.data.num
        if(num > 0)
        {
            commit(TEST_CONN_RECEIVE_SEARCH_FORM_VALUE, response)
            //直接跳转到搜索结果页面
            //设置查询结果集
            //sessionStorage.setItem('g_searchList', JSON.stringify(response.data))
            //直接跳转到对应页面
            //window.location.href = '/searchList/'
            //console.log(JSON.stringify(response.data))
            
        }
        else
          {
            server.get21FormValuesByWechat(data).then(response => {
            var num = response.data.num
            if(num > 0)
            {
                commit(TEST_CONN_RECEIVE_SEARCH_FORM_VALUE, response)

                //直接跳转到搜索结果页面
                //this.$f7router.navigate('/searchList/')
            }
            else
            {
              server.get21FormValuesByPhone(data).then(response => {
                var num = response.data.num
                if(num > 0)
                {
                    commit(TEST_CONN_RECEIVE_SEARCH_FORM_VALUE, response)
                    //this.$f7router.navigate('/searchList/')
                }
                else
                    commit(TEST_CONN_RECEIVE_SEARCH_STATUS, response)
              })
            }
            })
          }
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
    },

    //得到活动列表
    getactivityformvalues({commit}, data){
      server.getformvalues_low(data)
        .then(response => {
        //response.userId = response.userId
        commit(TEST_CONN_RECEIVE_ACTIVITY_MSG, response)
        //alert(response.userName)
        })
      //因为是异步 所以会立即返回 
      //alert(ret.userName)
    },

    //得到状态列表
    getGGStatusFormValues({commit}, data){
      server.getformvalues_low(data)
        .then(response => {
        //response.userId = response.userId
        commit(TEST_CONN_RECEIVE_GGSTATUS_MSG, response)
        //alert(response.userName)
        })
      //因为是异步 所以会立即返回 
      //alert(ret.userName)
    },

    //根据form_data_id得到精确的21项目的表单记录
    getformvaluesaccurate({commit}, data){
        data = data + ","
        server.getformvaluesaccurate(
          JSON.stringify({ 	
					"in_foldername":"GGAccount",
					"in_formname":"21项信息",
					"in_username":"ivy",
					"in_keynames":"键值,",
					"in_keyvalues":data,
          "in_fieldnames":"姓名,微信,手机,引导人,状态,引导人姓名,性别,阶段,引导人会属,引导人区域,管理者,涉外时间,涉外类型,涉外田地,生日,会属,婚恋,学历,职业,就业,负债,健康,学习计划,信仰年数,读经情况,祷告情况,服侍情况,戒备情况,状态变更原因,"
				 })).then(response => {
          console.log('in getformvaluesaccurate')
          commit(TEST_CONN_RECEIVE_USER_21_MSG, response)
          //alert(response.userName)
          })
        //因为是异步 所以会立即返回 
        //alert(ret.userName)
      },

      //根据form_data_id得到精确的21项目的表单记录
    getformvaluesaccurate_2({commit}, data){
      data = data + ","
      server.getformvaluesaccurate(
        JSON.stringify({ 	
        "in_foldername":"GGAccount",
        "in_formname":"21项信息",
        "in_username":"ivy",
        "in_keynames":"键值,",
        "in_keyvalues":data,
        "in_fieldnames":"姓名,微信,手机,引导人,状态,阶段,性别,"
       })).then(response => {
        //response.userId = response.userId
        commit(GET_PERSONAL_STEP, response)
        //alert(response.userName)
        })
      //因为是异步 所以会立即返回 
      //alert(ret.userName)
    },

      //获得某引导人名下的蝈蝈
      get_my_gglist({commit},data){
        server_db.getGGIMF_S(data).then(response => {
          //response.userId = response.userId
          commit(GET_GG_IMF_DATA, response)
          //alert(response.userName)
          })
        //因为是异步 所以会立即返回 
        //alert(ret.userName)
      },

      //获得某管理人名下的蝈蝈
      get_our_gglist({commit},data){
        server_db.getGGIMF_S2(data).then(response => {
          //response.userId = response.userId
          commit(GET_OUR_GG_IMF_DATA, response)
          //alert(response.userName)
          })
        //因为是异步 所以会立即返回 
        //alert(ret.userName)
      },

      //得到个人信息 及自己的21项信息
      getPersonalAccount({commit},data){
        server_db.getPersonalAccount(data).then(response => {
          //response.userId = response.userId
          commit(GET_PERSONAL_IMF_DATA, response)
          var ggid = response.data.datas[0].蝈蝈关联表单
          data = data + ","
          server.getformvaluesaccurate(
            JSON.stringify({ 	
            "in_foldername":"GGAccount",
            "in_formname":"21项信息",
            "in_username":"ivy",
            "in_keynames":"键值,",
            "in_keyvalues":ggid,
            "in_fieldnames":"姓名,微信,手机,引导人,状态,阶段,性别,"
          })).then(response => {
           
                    commit(GET_PERSONAL_STEP, response)
       
                  })
          //alert(response.userName)
          })
        //因为是异步 所以会立即返回 
        //alert(ret.userName)
      },

      //得到个人藏单
      getPersonalFavorite({commit},data){
        server_db.getPersonalFavorite(data).then(response => {
          //response.userId = response.userId
          commit(GET_PERSONAL_FAVORITE_DATA, response)
          //alert(response.userName)
          })
        //因为是异步 所以会立即返回 
        //alert(ret.userName)
      },
      
      //得到个人藏单下的蝈蝈信息
      getPersonalFavoriteList({commit},data){
        server_db.getPersonalFavoriteList(data).then(response => {
          //response.userId = response.userId
          commit(GET_PERSONAL_FAVORITE_DATA_LIST, response)
          //alert(response.userName)
          })
        //因为是异步 所以会立即返回 
        //alert(ret.userName)
      },
      
      //更新信息
      updateformvalues({commit}, data){
        server.updateformvalues(data)
        .then(response => {
        //response.userId = response.userId
        commit(TEST_CONN_RECEIVE_UPDATE_MSG, response)
        //alert(response.userName)
        })
      },

      //插入信息
      insertformvalues({commit}, data){
        server.insertformvalues(data)
        .then(response => {
        //response.userId = response.userId
        commit(TEST_CONN_RECEIVE_UPDATE_MSG, response)
        //alert(response.userName)
        })
      },  

      test4set({commit}, data) {
        commit(TEST_FOR_SET, data)
      },
      
      ///////////////////////////////////////////////////////////////
      //更新store里的活动值
      updateActivityInStore({commit}, data)
      {
        console.log(data)
        var  in_data = JSON.parse(data)
        commit(RECEIVE_UPDATE_ACTIVITY_MSG_IN_STORE, in_data)
      }

    //自动生成部分4.
    /*
    getGenderList({commit}){
        server_c.getGenderList().then(response => {
          commit(GET_CONFIG_GENDER_DATA, response)
          })
        //因为是异步 所以会立即返回 
        //alert(ret.userName)
      },*/
}

const mutations = {
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
  },
  [TEST_FOR_SET](state, data) {
    state.l_userId = state.l_userId + data;
  },

    //得到某引导人的gg列表
    [GET_GG_IMF_DATA](state, data) {
      console.log('get GET_GG_IMF_DATA')
      state.l_ret_gg_imf_s = data.data;
  },
    //得到某管理员的gg列表
    [GET_OUR_GG_IMF_DATA](state, data) {
      console.log('get GET_OUR_GG_IMF_DATA')
      state.l_ret_our_gg_imf_s = data.data;
      state.l_ret_gg_imf_s = data.data;
    },
    //返回个人补充信息
    [GET_PERSONAL_IMF_DATA](state, data) {
      state.l_ret_personal_imf_s = data.data;
    },
    //返回个人阶段信息
    [GET_PERSONAL_STEP](state, data) {
      state.l_ret_personal_gg_s = data.data;
    },
    
    //返回个人藏单 只是藏单描述
    [GET_PERSONAL_FAVORITE_DATA](state, data) {
      state.l_ret_personal_favorite_s = data.data;
    },

    //返回个人藏单中所有的蝈蝈信息
    [GET_PERSONAL_FAVORITE_DATA_LIST](state, data) {
      console.log('get GET_PERSONAL_FAVORITE_DATA_LIST')
      state.l_ret_gg_imf_s = data.data;
      state.l_ret_personal_favorite_list_s = data.data;
    },
    
    //基本信息
    [TEST_CONN_RECEIVE_USER_21_MSG](state, data){ 
      state.l_retdata = data.data;
      var msg = data.data.datas[0];
      var i = 0;
      for (var key in msg)
      {
          //console.log("key:" + key + ", value:" ,data.data.datas[0][key]);
          if(key != '键值' && key != '蝈蝈关联表单')
          {
            state.l_retkeyname[i] = key;
            i = i + 1;
          }
      }
    },
      //活动信息
      /*
      l_retactivitydata:[],
      l_retkeyactivityname:[],
       */
      [TEST_CONN_RECEIVE_ACTIVITY_MSG](state, data){ 
        state.l_retactivitydata = data.data;
        var msg = data.data.datas[0];
        var i = 0;
        for (var key in msg)
        {
            //console.log("key:" + key + ", value:" ,data.data.datas[0][key]);
            if(key != '键值' && key != '蝈蝈关联表单')
            {
              state.l_retkeyactivityname[i] = key;
              i = i + 1;
            }
        }
      //console.log("json key name is ", state.l_retkeyname[4])
    },

    //得到查询的返回值
    [TEST_CONN_RECEIVE_SEARCH_FORM_VALUE](state, data){ 
      console.log('get TEST_CONN_RECEIVE_SEARCH_FORM_VALUE')
      state.l_ret_gg_imf_s = data.data;
      state.l_ret_search_data = data.data;
      state.l_ret_search_none = 1;
    //console.log("json key name is ", state.l_retkeyname[4])
  },

  [TEST_CONN_RECEIVE_SEARCH_STATUS](state, data){ 
    console.log('get TEST_CONN_RECEIVE_SEARCH_STATUS')
    state.l_ret_search_none = 0;
  //console.log("json key name is ", state.l_retkeyname[4])
},
  

    //更改表单时的返回值
    [TEST_CONN_RECEIVE_UPDATE_MSG](state, data){ 
      state.l_tempStr = data.code;
    //console.log("json key name is ", state.l_retkeyname[4])
  },

    [TEST_CONN_RECEIVE_GGSTATUS_MSG](state, data){ 
      state.l_ret_gg_status_data = data.data;
    //console.log("json key name is ", state.l_retkeyname[4])
  },

    [TEST_CONN_RECEIVE_ONLY_ONE_ACTIVITY_MSG](state, data){ 
      state.l_retOnlyOneActivityData = data.data;
  },

  [RECEIVE_UPDATE_ACTIVITY_MSG_IN_STORE](state, data){ 
    var index = data.index
    console.log(index)
    state.l_retactivitydata.datas[index] = data.data;
    console.log(data.data)
},
    
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
