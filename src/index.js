// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './components/app'
import router from './router'
import store from './store'

import '../resource/style/app.scss'

// import '../resource/plugin/script/flexible'

Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})
