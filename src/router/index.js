import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/Login'
import Main from '../pages/main/Main'
import Categories from '../pages/categories/Categories';
import ListCategories from '../pages/categories/list-categories/ListCategories';
import CreateCategories from '../pages/categories/create-categories/CreateCategories';
import DetailCategories from '../pages/categories/detail-categories/DetailCategories';

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
      component:Main,
      children:[
        {
          path: 'categories',
          component: Categories,
          children:[
            { path: 'list',component:ListCategories },
            { path: 'create' , component : CreateCategories },
            { path: 'detail/:id', component: DetailCategories }
          ]
        }
      ]
    }
  ]
})