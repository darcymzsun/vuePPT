import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import page1 from '@/app/page1'
import page2 from '@/app/page2'
import page3 from '@/app/page3'
import page4 from '@/app/page4'
import page5 from '@/app/page5'
import page6 from '@/app/page6'
import page7 from '@/app/page7'
import page8 from '@/app/page8'
import page9 from '@/app/page9'
import page10 from '@/app/page10'
import page11 from '@/app/page11'
import page12 from '@/app/page12'
import page13 from '@/app/page13'
import page14 from '@/app/page14'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'page1',
      component: page1
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
    {
      path: '/page3',
      name: 'page3',
      component: page3
    },
    {
      path: '/page4',
      name: 'page4',
      component: page4
    },
    {
      path: '/page5',
      name: 'page5',
      component: page5
    },
    {
      path: '/page6',
      name: 'page6',
      component: page6
    },
    {
      path: '/page7',
      name: 'page7',
      component: page7
    },
    {
      path: '/page8',
      name: 'page8',
      component: page8
    },
    {
      path: '/page9',
      name: 'page9',
      component: page9
    }
  ]
})
