import Vue from 'vue'
import Router from 'vue-router'
import Collection from './views/Collection.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/Word'
    },
    {
      path: '/Word',
      name: 'View',
      component: Collection
    },
    {
      path: '/Phrase',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/Sentence',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/About',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
