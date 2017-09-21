import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

// import page1 from '@/components/page1'
import page2 from '@/components/page2'
import info from '@/components/info'
import use from '@/components/use'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: resolve => require(['../components/Hello'], resolve)
    },
    {
    	path:'/page1',
    	component:resolve => require(['../components/page1'], resolve)
    },
    {
      path:'/page3',
      component:resolve => require(['../components/page3'],resolve)
    },
    {
      path:'/page2',
      component:page2
    },
    {
      path:'/page2/info/:id',
      component:info
    },
    {
      path:'/page1/use',
      component:use
    }
  ]
})
