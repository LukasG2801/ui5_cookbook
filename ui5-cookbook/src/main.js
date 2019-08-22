import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//Components to create Routes
import home from '@/components/home'
import grundlagen from '@/components/grundlagen'
import architektur from '@/components/architektur'
import tools from '@/components/tools'
import odata from '@/components/OData'

//Vuetify Design Library
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false;
Vue.use(VueRouter)

const routes = [
  {path: '/home', component: home},
  {path: '/grundlagen', component: grundlagen},
  {path: '/architecture', component: architektur},
  {path: '/tools', component: tools},
  {path: '/odata', component: odata}
]

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')



