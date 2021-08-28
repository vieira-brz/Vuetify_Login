import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import axiosHttp from './plugins/axios'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  axiosHttp,
  render: h => h(App)
}).$mount('#app')
