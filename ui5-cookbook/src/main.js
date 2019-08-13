import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//Components to create Routes
import home from '@/components/home'
import grundlagen from '@/components/grundlagen'

//Vuetify Design Library
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false;
Vue.use(VueRouter)

const routes = [
  {path: '/foo', component: home},
  {path: '/grundlagen', component: grundlagen}
]

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')



