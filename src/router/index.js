import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../ui/HomePage'
import layoutmain from '../ui/layoutmain'
import Occupation from '../ui/Occupation'
import City from '../ui/City'
import PersonalCenter from '../ui/PersonalCenter'
import Map from '../ui/Map'
import match from "../ui/match";

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
          path: 'city',
          component: City
        },
        {
          path: 'occupation',
          component: Occupation
        },
        {
          path: 'personalcenter',
          component: PersonalCenter
        },
        {
          path:'map',
          component: Map
        },
        {
          path:'match',
          component: match
        },
      ]
    }
  ]
})
