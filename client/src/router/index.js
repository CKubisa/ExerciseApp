import { createRouter, createWebHistory } from 'vue-router'
import Session from '../services/session';
import Home from '../views/Home.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresLogin: true }
      },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/history',
      name: 'History',
      component: () => import('../views/History.vue'),
      meta: { requiresLogin: true }
    },
    {
      path: '/exercise',
      name: 'Exercise',
      component: () => import('../views/Exercise.vue'),
      meta: { requiresLogin: true }
    },
    {
      path: '/report',
      name: 'Report',
      component: () => import('../views/Report.vue'),
      meta: { requiresLogin: true }
    },
    {
      path: '/myfriends',
      name: 'MyFriends',
      component: () => import('../views/MyFriends.vue'),
      meta: { requiresLogin: true }
    },
    {
      path: '/findfriends',
      name: 'FindFriendss',
      component: () => import('../views/FindFriends.vue'),
      meta: { requiresLogin: true }
    },
    {
      path: '/myactivity',
      name: 'MyActivity',
      component: () => import('../views/MyActivity.vue'),
      meta: { requiresLogin: true }
    },
    {
      path: '/friendsactivity',
      name: 'FriendsActivity',
      component: () => import('../views/FriendsActivity.vue'),
      meta: { requiresLogin: true }
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