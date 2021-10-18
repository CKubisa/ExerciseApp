import { createRouter, createWebHistory } from 'vue-router'
import Session from '../services/session';
import Home from '../views/Home.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
      },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
    },
    {
      path: '/history',
      name: 'History',
      component: () => import(/* webpackChunkName: "about" */ '../views/History.vue')
    },
    {
      path: '/exercise',
      name: 'Exercise',
      component: () => import(/* webpackChunkName: "about" */ '../views/Exercise.vue')
    },
    {
      path: '/report',
      name: 'Report',
      component: () => import(/* webpackChunkName: "about" */ '../views/Report.vue')
    },
    {
      path: '/myfriends',
      name: 'MyFriends',
      component: () => import(/* webpackChunkName: "about" */ '../views/MyFriends.vue')
    },
    {
      path: '/findfriends',
      name: 'FindFriendss',
      component: () => import(/* webpackChunkName: "about" */ '../views/FindFriends.vue')
    },
    {
      path: '/myactivity',
      name: 'MyActivity',
      component: () => import(/* webpackChunkName: "about" */ '../views/MyActivity.vue')
    },
    {
      path: '/friendsactivity',
      name: 'FriendsActivity',
      component: () => import(/* webpackChunkName: "about" */ '../views/FriendsActivity.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresLogin && !Session.user){
        next('/login');
    }else{
        next();
    }
  } )

export default router