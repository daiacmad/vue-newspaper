import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/Login'
import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login-page',
      component: Login
    }
  ]
})
