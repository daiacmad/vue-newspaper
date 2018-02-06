import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/Login'
import Main from '../pages/main/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'loginPage',
      component: Login
    },{
      path: '/',
      name: 'MainPage',
      component:Main
    }
  ]
})
