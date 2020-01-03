import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../ui/HomePage'
import layoutmain from '../ui/layoutmain'
import Occupation from '../ui/Occupation'
import City from '../ui/City'
import Map from '../ui/Map'
import match from "../ui/match";
import register from "../ui/register";
import login from "../ui/login";
Vue.use(Router)

export default new Router({
  base: '/',
  routes: [
    {
      path: '/',
      component: layoutmain,
      children: [
        {
          path: '/index',
          name: 'homepage',
          component: HomePage
        },
        {
          name:'citys',
          path: 'city/:city',
          component: City
        },
        {
          name:'position',
          path: 'occupation/:id',
          component: Occupation
        },
        {
          name:'register',
          path:'register',
          component:register
        },
        {
          name:'login',
          path:'login',
          component:login
        },
        {
          path:'map',
          component: Map
        },
        {
          name:'match',
          path:'match',
          component: match
        },
      ]
    }
  ]
})
