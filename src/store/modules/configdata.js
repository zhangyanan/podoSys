import server_c from '@/models/configdata'

/*export lines are created by machine @ 2018-06-26 11:07:56*/
export const GET_CONFIG_GENDER_DATA = 'GET_CONFIG_GENDER_DATA'
export const SET_CONFIG_GENDER_DATA = 'SET_CONFIG_GENDER_DATA'
export const GET_CONFIG_GGSTUDYSTATUS_DATA = 'GET_CONFIG_GGSTUDYSTATUS_DATA'
export const SET_CONFIG_GGSTUDYSTATUS_DATA = 'SET_CONFIG_GGSTUDYSTATUS_DATA'
export const GET_CONFIG_HSCONTENT_DATA = 'GET_CONFIG_HSCONTENT_DATA'
export const SET_CONFIG_HSCONTENT_DATA = 'SET_CONFIG_HSCONTENT_DATA'
export const GET_CONFIG_QYCONTENT_DATA = 'GET_CONFIG_QYCONTENT_DATA'
export const SET_CONFIG_QYCONTENT_DATA = 'SET_CONFIG_QYCONTENT_DATA'
export const GET_CONFIG_MARRIAGE_DATA = 'GET_CONFIG_MARRIAGE_DATA'
export const SET_CONFIG_MARRIAGE_DATA = 'SET_CONFIG_MARRIAGE_DATA'
export const GET_CONFIG_SWTYPE_DATA = 'GET_CONFIG_SWTYPE_DATA'
export const SET_CONFIG_SWTYPE_DATA = 'SET_CONFIG_SWTYPE_DATA'
export const GET_CONFIG_CHURCHS_DATA = 'GET_CONFIG_CHURCHS_DATA'
export const SET_CONFIG_CHURCHS_DATA = 'SET_CONFIG_CHURCHS_DATA'
export const GET_CONFIG_HEALTH_DATA = 'GET_CONFIG_HEALTH_DATA'
export const SET_CONFIG_HEALTH_DATA = 'SET_CONFIG_HEALTH_DATA'
export const GET_CONFIG_EDUCATION_DATA = 'GET_CONFIG_EDUCATION_DATA'
export const SET_CONFIG_EDUCATION_DATA = 'SET_CONFIG_EDUCATION_DATA'
export const GET_CONFIG_OCCUPTION_DATA = 'GET_CONFIG_OCCUPTION_DATA'
export const SET_CONFIG_OCCUPTION_DATA = 'SET_CONFIG_OCCUPTION_DATA'
export const GET_CONFIG_EMPLOYMENT_DATA = 'GET_CONFIG_EMPLOYMENT_DATA'
export const SET_CONFIG_EMPLOYMENT_DATA = 'SET_CONFIG_EMPLOYMENT_DATA'
export const GET_CONFIG_DEBT_DATA = 'GET_CONFIG_DEBT_DATA'
export const SET_CONFIG_DEBT_DATA = 'SET_CONFIG_DEBT_DATA'
export const GET_CONFIG_STUDYSCHEDULES_DATA = 'GET_CONFIG_STUDYSCHEDULES_DATA'
export const SET_CONFIG_STUDYSCHEDULES_DATA = 'SET_CONFIG_STUDYSCHEDULES_DATA'
export const GET_CONFIG_YEARSOFFAITH_DATA = 'GET_CONFIG_YEARSOFFAITH_DATA'
export const SET_CONFIG_YEARSOFFAITH_DATA = 'SET_CONFIG_YEARSOFFAITH_DATA'
export const GET_CONFIG_YESORNO_DATA = 'GET_CONFIG_YESORNO_DATA'
export const SET_CONFIG_YESORNO_DATA = 'SET_CONFIG_YESORNO_DATA'
export const GET_CONFIG_READINGHABIT_DATA = 'GET_CONFIG_READINGHABIT_DATA'
export const SET_CONFIG_READINGHABIT_DATA = 'SET_CONFIG_READINGHABIT_DATA'
export const GET_CONFIG_PRAYERS_DATA = 'GET_CONFIG_PRAYERS_DATA'
export const SET_CONFIG_PRAYERS_DATA = 'SET_CONFIG_PRAYERS_DATA'
export const GET_CONFIG_SELFSERVICE_DATA = 'GET_CONFIG_SELFSERVICE_DATA'
export const SET_CONFIG_SELFSERVICE_DATA = 'SET_CONFIG_SELFSERVICE_DATA'
export const GET_CONFIG_VIGILANT_DATA = 'GET_CONFIG_VIGILANT_DATA'
export const SET_CONFIG_VIGILANT_DATA = 'SET_CONFIG_VIGILANT_DATA'
export const GET_CONFIG_ACTIVITYTYPE_DATA = 'GET_CONFIG_ACTIVITYTYPE_DATA'
export const SET_CONFIG_ACTIVITYTYPE_DATA = 'SET_CONFIG_ACTIVITYTYPE_DATA'
export const GET_CONFIG_SHOWGGTITLE_DATA = 'GET_CONFIG_SHOWGGTITLE_DATA'
export const SET_CONFIG_SHOWGGTITLE_DATA = 'SET_CONFIG_SHOWGGTITLE_DATA'
export const GET_CONFIG_GGSTATUS_DATA = 'GET_CONFIG_GGSTATUS_DATA'
export const SET_CONFIG_GGSTATUS_DATA = 'SET_CONFIG_GGSTATUS_DATA'

const state = {
        /*declare var are created by machine @ 2018-06-26 11:07:56*/
        l_gender_data:[],
        l_ggstudystatus_data:[],
        l_hscontent_data:[],
        l_qycontent_data:[],
        l_marriage_data:[],
        l_swtype_data:[],
        l_churchs_data:[],
        l_health_data:[],
        l_education_data:[],
        l_occuption_data:[],
        l_employment_data:[],
        l_debt_data:[],
        l_studyschedules_data:[],
        l_yearsoffaith_data:[],
        l_yesorno_data:[],
        l_readinghabit_data:[],
        l_prayers_data:[],
        l_selfservice_data:[],
        l_vigilant_data:[],
        l_activitytype_data:[],
        l_showggtitle_data:[],
        l_ggstatus_data:[],
}

const getters = {
        /*getter lines are created by machine @ 2018-06-26 11:07:56*/
        l_gender_data: state => state.l_gender_data,
        l_ggstudystatus_data: state => state.l_ggstudystatus_data,
        l_hscontent_data: state => state.l_hscontent_data,
        l_qycontent_data: state => state.l_qycontent_data,
        l_marriage_data: state => state.l_marriage_data,
        l_swtype_data: state => state.l_swtype_data,
        l_churchs_data: state => state.l_churchs_data,
        l_health_data: state => state.l_health_data,
        l_education_data: state => state.l_education_data,
        l_occuption_data: state => state.l_occuption_data,
        l_employment_data: state => state.l_employment_data,
        l_debt_data: state => state.l_debt_data,
        l_studyschedules_data: state => state.l_studyschedules_data,
        l_yearsoffaith_data: state => state.l_yearsoffaith_data,
        l_yesorno_data: state => state.l_yesorno_data,
        l_readinghabit_data: state => state.l_readinghabit_data,
        l_prayers_data: state => state.l_prayers_data,
        l_selfservice_data: state => state.l_selfservice_data,
        l_vigilant_data: state => state.l_vigilant_data,
        l_activitytype_data: state => state.l_activitytype_data,
        l_showggtitle_data: state => state.l_showggtitle_data,
        l_ggstatus_data: state => state.l_ggstatus_data,
}

const actions = {
        /*actions lines are created by machine @ 2018-06-26 11:07:56*/
        get_l_gender_datalist({commit}){server_c.get_l_gender_datalist().then(response => { commit(GET_CONFIG_GENDER_DATA,response)})},
        set_l_gender_datalist({commit}, data){  commit(SET_CONFIG_GENDER_DATA,data)},
        get_l_ggstudystatus_datalist({commit}){server_c.get_l_ggstudystatus_datalist().then(response => { commit(GET_CONFIG_GGSTUDYSTATUS_DATA,response)})},
        set_l_ggstudystatus_datalist({commit}, data){  commit(SET_CONFIG_GGSTUDYSTATUS_DATA,data)},
        get_l_hscontent_datalist({commit}){server_c.get_l_hscontent_datalist().then(response => { commit(GET_CONFIG_HSCONTENT_DATA,response)})},
        set_l_hscontent_datalist({commit}, data){  commit(SET_CONFIG_HSCONTENT_DATA,data)},
        get_l_qycontent_datalist({commit}){server_c.get_l_qycontent_datalist().then(response => { commit(GET_CONFIG_QYCONTENT_DATA,response)})},
        set_l_qycontent_datalist({commit}, data){  commit(SET_CONFIG_QYCONTENT_DATA,data)},
        get_l_marriage_datalist({commit}){server_c.get_l_marriage_datalist().then(response => { commit(GET_CONFIG_MARRIAGE_DATA,response)})},
        set_l_marriage_datalist({commit}, data){  commit(SET_CONFIG_MARRIAGE_DATA,data)},
        get_l_swtype_datalist({commit}){server_c.get_l_swtype_datalist().then(response => { commit(GET_CONFIG_SWTYPE_DATA,response)})},
        set_l_swtype_datalist({commit}, data){  commit(SET_CONFIG_SWTYPE_DATA,data)},
        get_l_churchs_datalist({commit}){server_c.get_l_churchs_datalist().then(response => { commit(GET_CONFIG_CHURCHS_DATA,response)})},
        set_l_churchs_datalist({commit}, data){  commit(SET_CONFIG_CHURCHS_DATA,data)},
        get_l_health_datalist({commit}){server_c.get_l_health_datalist().then(response => { commit(GET_CONFIG_HEALTH_DATA,response)})},
        set_l_health_datalist({commit}, data){  commit(SET_CONFIG_HEALTH_DATA,data)},
        get_l_education_datalist({commit}){server_c.get_l_education_datalist().then(response => { commit(GET_CONFIG_EDUCATION_DATA,response)})},
        set_l_education_datalist({commit}, data){  commit(SET_CONFIG_EDUCATION_DATA,data)},
        get_l_occuption_datalist({commit}){server_c.get_l_occuption_datalist().then(response => { commit(GET_CONFIG_OCCUPTION_DATA,response)})},
        set_l_occuption_datalist({commit}, data){  commit(SET_CONFIG_OCCUPTION_DATA,data)},
        get_l_employment_datalist({commit}){server_c.get_l_employment_datalist().then(response => { commit(GET_CONFIG_EMPLOYMENT_DATA,response)})},
        set_l_employment_datalist({commit}, data){  commit(SET_CONFIG_EMPLOYMENT_DATA,data)},
        get_l_debt_datalist({commit}){server_c.get_l_debt_datalist().then(response => { commit(GET_CONFIG_DEBT_DATA,response)})},
        set_l_debt_datalist({commit}, data){  commit(SET_CONFIG_DEBT_DATA,data)},
        get_l_studyschedules_datalist({commit}){server_c.get_l_studyschedules_datalist().then(response => { commit(GET_CONFIG_STUDYSCHEDULES_DATA,response)})},
        set_l_studyschedules_datalist({commit}, data){  commit(SET_CONFIG_STUDYSCHEDULES_DATA,data)},
        get_l_yearsoffaith_datalist({commit}){server_c.get_l_yearsoffaith_datalist().then(response => { commit(GET_CONFIG_YEARSOFFAITH_DATA,response)})},
        set_l_yearsoffaith_datalist({commit}, data){  commit(SET_CONFIG_YEARSOFFAITH_DATA,data)},
        get_l_yesorno_datalist({commit}){server_c.get_l_yesorno_datalist().then(response => { commit(GET_CONFIG_YESORNO_DATA,response)})},
        set_l_yesorno_datalist({commit}, data){  commit(SET_CONFIG_YESORNO_DATA,data)},
        get_l_readinghabit_datalist({commit}){server_c.get_l_readinghabit_datalist().then(response => { commit(GET_CONFIG_READINGHABIT_DATA,response)})},
        set_l_readinghabit_datalist({commit}, data){  commit(SET_CONFIG_READINGHABIT_DATA,data)},
        get_l_prayers_datalist({commit}){server_c.get_l_prayers_datalist().then(response => { commit(GET_CONFIG_PRAYERS_DATA,response)})},
        set_l_prayers_datalist({commit}, data){  commit(SET_CONFIG_PRAYERS_DATA,data)},
        get_l_selfservice_datalist({commit}){server_c.get_l_selfservice_datalist().then(response => { commit(GET_CONFIG_SELFSERVICE_DATA,response)})},
        set_l_selfservice_datalist({commit}, data){  commit(SET_CONFIG_SELFSERVICE_DATA,data)},
        get_l_vigilant_datalist({commit}){server_c.get_l_vigilant_datalist().then(response => { commit(GET_CONFIG_VIGILANT_DATA,response)})},
        set_l_vigilant_datalist({commit}, data){  commit(SET_CONFIG_VIGILANT_DATA,data)},
        get_l_activitytype_datalist({commit}){server_c.get_l_activitytype_datalist().then(response => { commit(GET_CONFIG_ACTIVITYTYPE_DATA,response)})},
        set_l_activitytype_datalist({commit}, data){  commit(SET_CONFIG_ACTIVITYTYPE_DATA,data)},
        get_l_showggtitle_datalist({commit}, param){server_c.get_l_showggtitle_datalist(param).then(response => { commit(GET_CONFIG_SHOWGGTITLE_DATA,response)})},
        set_l_showggtitle_datalist({commit}, data){  commit(SET_CONFIG_SHOWGGTITLE_DATA,data)},    
        get_l_ggstatus_datalist({commit}, param){server_c.get_l_ggstatus_datalist(param).then(response => { commit(GET_CONFIG_GGSTATUS_DATA,response)})},
        set_l_ggstatus_datalist({commit}, data){  commit(SET_CONFIG_GGSTATUS_DATA,data)},   
}

const mutations = {
        /*mutations lines are created by machine @ 2018-06-26 11:07:56*/
        [GET_CONFIG_GENDER_DATA](state, data){ state.l_gender_data = data.data;},
        [SET_CONFIG_GENDER_DATA](state, data){ state.l_gender_data = data.data;},
        [GET_CONFIG_GGSTUDYSTATUS_DATA](state, data){ state.l_ggstudystatus_data = data.data;},
        [SET_CONFIG_GGSTUDYSTATUS_DATA](state, data){ state.l_ggstudystatus_data = data.data;},
        [GET_CONFIG_HSCONTENT_DATA](state, data){ state.l_hscontent_data = data.data;},
        [SET_CONFIG_HSCONTENT_DATA](state, data){ state.l_hscontent_data = data.data;},
        [GET_CONFIG_QYCONTENT_DATA](state, data){ state.l_qycontent_data = data.data;},
        [SET_CONFIG_QYCONTENT_DATA](state, data){ state.l_qycontent_data = data.data;},
        [GET_CONFIG_MARRIAGE_DATA](state, data){ state.l_marriage_data = data.data;},
        [SET_CONFIG_MARRIAGE_DATA](state, data){ state.l_marriage_data = data.data;},
        [GET_CONFIG_SWTYPE_DATA](state, data){ state.l_swtype_data = data.data;},
        [SET_CONFIG_SWTYPE_DATA](state, data){ state.l_swtype_data = data.data;},
        [GET_CONFIG_CHURCHS_DATA](state, data){ state.l_churchs_data = data.data;},
        [SET_CONFIG_CHURCHS_DATA](state, data){ state.l_churchs_data = data.data;},
        [GET_CONFIG_HEALTH_DATA](state, data){ state.l_health_data = data.data;},
        [SET_CONFIG_HEALTH_DATA](state, data){ state.l_health_data = data.data;},
        [GET_CONFIG_EDUCATION_DATA](state, data){ state.l_education_data = data.data;},
        [SET_CONFIG_EDUCATION_DATA](state, data){ state.l_education_data = data.data;},
        [GET_CONFIG_OCCUPTION_DATA](state, data){ state.l_occuption_data = data.data;},
        [SET_CONFIG_OCCUPTION_DATA](state, data){ state.l_occuption_data = data.data;},
        [GET_CONFIG_EMPLOYMENT_DATA](state, data){ state.l_employment_data = data.data;},
        [SET_CONFIG_EMPLOYMENT_DATA](state, data){ state.l_employment_data = data.data;},
        [GET_CONFIG_DEBT_DATA](state, data){ state.l_debt_data = data.data;},
        [SET_CONFIG_DEBT_DATA](state, data){ state.l_debt_data = data.data;},
        [GET_CONFIG_STUDYSCHEDULES_DATA](state, data){ state.l_studyschedules_data = data.data;},
        [SET_CONFIG_STUDYSCHEDULES_DATA](state, data){ state.l_studyschedules_data = data.data;},
        [GET_CONFIG_YEARSOFFAITH_DATA](state, data){ state.l_yearsoffaith_data = data.data;},
        [SET_CONFIG_YEARSOFFAITH_DATA](state, data){ state.l_yearsoffaith_data = data.data;},
        [GET_CONFIG_YESORNO_DATA](state, data){ state.l_yesorno_data = data.data;},
        [SET_CONFIG_YESORNO_DATA](state, data){ state.l_yesorno_data = data.data;},
        [GET_CONFIG_READINGHABIT_DATA](state, data){ state.l_readinghabit_data = data.data;},
        [SET_CONFIG_READINGHABIT_DATA](state, data){ state.l_readinghabit_data = data.data;},
        [GET_CONFIG_PRAYERS_DATA](state, data){ state.l_prayers_data = data.data;},
        [SET_CONFIG_PRAYERS_DATA](state, data){ state.l_prayers_data = data.data;},
        [GET_CONFIG_SELFSERVICE_DATA](state, data){ state.l_selfservice_data = data.data;},
        [SET_CONFIG_SELFSERVICE_DATA](state, data){ state.l_selfservice_data = data.data;},
        [GET_CONFIG_VIGILANT_DATA](state, data){ state.l_vigilant_data = data.data;},
        [SET_CONFIG_VIGILANT_DATA](state, data){ state.l_vigilant_data = data.data;},
        [GET_CONFIG_ACTIVITYTYPE_DATA](state, data){ state.l_activitytype_data = data.data;},
        [SET_CONFIG_ACTIVITYTYPE_DATA](state, data){ state.l_activitytype_data = data.data;},
        [GET_CONFIG_SHOWGGTITLE_DATA](state, data){ state.l_showggtitle_data = data.data;},
        [SET_CONFIG_SHOWGGTITLE_DATA](state, data){ state.l_showggtitle_data = data.data;},
        [GET_CONFIG_GGSTATUS_DATA](state, data){ state.l_ggstatus_data = data.data;},
        [SET_CONFIG_GGSTATUS_DATA](state, data){ state.l_ggstatus_data = data.data;},        
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}