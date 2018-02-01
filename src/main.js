// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from "./App"
import Vuerouter from "vue-router"
import Swiper  from  "vue-awesome-swiper"
import 'swiper/dist/css/swiper.css'


import Shouye from "./components/shouye.vue"
import Zhuanlan from "./components/zhuanlan.vue"
import Discuss from  "./components/discuss.vue"
import Login from  "./components/login.vue"
import Register from  "./components/register.vue"
import Hotleft from  "./components/hotleft.vue"


Vue.use(Vuerouter)
Vue.use(Swiper)

let router = new Vuerouter({
  routes:[
    {path:"/shouye",component:Shouye,
      children:[
        {path:"hots/:cid",component:Hotleft,name:"hots"},
        {path: '', redirect: 'hots/1'}
      ]
    },
    {path:"/zhuanlan",component:Zhuanlan},
    {path:"/discuss",component:Discuss},
    {path:"/login",component:Login},
    {path:"/register",component:Register},
    {path:"/",component:Shouye}
  ]
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router

});
