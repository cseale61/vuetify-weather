import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Warn from '../views/Warn.vue';
import About from '../views/About.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/warn',
    name: 'Warn',
    component: Warn
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router