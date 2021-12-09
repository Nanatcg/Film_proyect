import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from 'vue-notification';
import VueAxios from 'vue-axios';
import axios from "axios";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(Notifications)
Vue.use(VueAxios,axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
