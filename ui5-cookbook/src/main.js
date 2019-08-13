import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import Router from 'vue-router'
import home from '@/components/home'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(Router),

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})