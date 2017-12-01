import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import WhatIsVue from '@/app/what-is-vue'
import index from '@/app/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/whatisvue',
      name: 'WhatIsVue',
      component: WhatIsVue
    }
  ]
})
