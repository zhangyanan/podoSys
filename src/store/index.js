import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import notice from './modules/notice'
import workarea from './modules/workarea'
import createLogger from '../plugins/logger'
import listdata from './modules/wheatlist'
import datainterchange from './modules/datainterchange'
import configdata from './modules/configdata'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    notice,
    workarea,
    listdata, 
    configdata,
    datainterchange,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})


