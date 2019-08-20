import Vue from 'vue'
import Router from 'vue-router'
import register from '../components/register'
import NOTfound from '../components/404'
import login from '../components/login'
import index from '../components/index'
import main from '../components/main'
import fund from '../components/fund'
import personal from '../components/personal'
import add from '../components/add'
import edit from '../components/edit'

Vue.use(Router)


var router= new Router({
  routes: [
    {
      path: '/',
      name: 'register',
     redirect:'/register'
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'*',
      component:NOTfound

    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/index',
      component:index,
      redirect:'/index/main',
      children:[
        {path:'/index/main',component:main},
        {path:'/index/fund', component:fund,children:[
        {path: '/index/fund/add' ,component:add},
        {path:'/index/fund/edit' ,component:edit}
        ]},
        {path:'/index/personal',component:personal}
      ]
    }

    
  ]
})
router.beforeEach((to,from,next)=>{
  const islogin=sessionStorage.islogin? true : false;
  if(to.path=='/login'||to.path=='/register'){
    next();
  }else{
    islogin ? next():next('/login');
   
    
  
  }
})





export default router;