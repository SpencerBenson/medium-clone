import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/login',
    name: 'Sign in',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Sign Up',
    component: ()=> import('@/views/Register.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: ()=> import('@/views/Settings.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ()=> import('@/views/Profile.vue')
  },
  {
    path: '/editarticle',
    name: 'Edit Article',
    component: ()=> import('@/views/EditArticle.vue')
  },
  {
    path: '/create-article',
    name: 'Create Article',
    component: ()=> import('@/views/CreateArticle.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component: ()=> import('@/views/Article.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
