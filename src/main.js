// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Framework7 from 'framework7/dist/framework7.esm.bundle.js'
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js'
// import Framework7Styles from 'framework7/dist/css/framework7.css'

import routes from './config/routes'
import store from './store/'
import components from './components/'

import App from './App'
// import iconsStyles from './css/font-icons.css'
// import fontStyles from './css/font-roboto.css'
import appStyles from './css/app.scss'
import customStyles from './css/styles.scss'

Vue.config.productionTip = false

// Vue.use(Framework7Vue, Framework7, Framework7Styles, fontStyles, iconsStyles, appStyles, customStyles)
// Vue.use(Framework7Vue, Framework7, Framework7Styles, appStyles, customStyles)
Vue.use(Framework7Vue, Framework7, appStyles, customStyles)

Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toLowerCase())
  Vue.component(`v-${name}`, components[key])
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  framework7: {
    root: '#app',
    theme: 'md',
    routes: routes
  },
  store,
  components: { App },
  template: '<App/>'
})
