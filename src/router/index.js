import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/Login'
import Main from '../pages/main/Main'
import Categories from '../pages/categories/Categories';
import ListCategories from '../pages/categories/list-categories/ListCategories';
import CreateCategories from '../pages/categories/create-categories/CreateCategories';
import DetailCategories from '../pages/categories/detail-categories/DetailCategories';

Vue.use(Router)

const router = new Router({
  routes: [
    { 				
      path: '/login',
      name: 'loginPage',
      component: Login,
      beforeEnter:checkLogin
    },{
      path: '/',
      name: 'MainPage',
      component:Main,
      beforeEnter:requireAuth,
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
});

function requireAuth(to, from, next){
  var infoUser = JSON.parse(localStorage.getItem("infoUser") ) ;
  (infoUser) ? next() : next("/login");
};

function checkLogin(to , from , next){
  var infoUser = JSON.parse(localStorage.getItem("infoUser") ) ;
  (infoUser) ? $(location).attr('href', '') : next();
}

export default router