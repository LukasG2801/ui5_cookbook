import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

//Components to create Routes
import home from '@/components/home'
import grundlagen from '@/components/grundlagen'
import architektur from '@/components/architektur'
import tools from '@/components/tools'
import odata from '@/components/OData'
import webide_newproject from '@/components/WEBIDE_NewProject'
import segw from '@/components/segw'
import impressum from '@/components/impressum'

//Components WEBIDE
import webide_projectfromtemplate from '@/components/WEBIDE/WEBIDE_ProjectFromTemplate'

//Vuetify Design Library
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

//Highlight.js
import VueHighlightJs from 'vue-highlightjs'

Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.use(VueHighlightJs)


const routes = [
  {path: '/home', component: home},
  {path: '/grundlagen', component: grundlagen},
  {path: '/architecture', component: architektur},
  {path: '/tools', component: tools},
  {path: '/odata', component: odata},
  {path: '/webide_newproject', component: webide_newproject},
  {path: '/segw', component: segw},
  {path: '/impressum', component: impressum},
  {path: '/webide_projectfromtemplate', component: webide_projectfromtemplate}
]

Vue.config.productionTip = false 

const isProd = process.env.NODE_ENV === 'production'
const router = new VueRouter({
  routes
})


Vue.use(VueAnalytics, {
  id: 'UA-147659672-1',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
})



new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')



