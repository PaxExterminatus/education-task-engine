import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const VueCookie = require('vue-cookie')
Vue.use(VueCookie)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
