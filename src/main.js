import Vue from 'vue'
import App from './App.vue'
import './quasar'
import VueRouter from 'vue-router'
import store from './store.js'
import router from './router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFontAwesome, faFacebookSquare, faInstagram)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store: store,
  router: router
}).$mount('#app')
