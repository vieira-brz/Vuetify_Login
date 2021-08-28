import Vue from 'vue'
import VueRouter from 'vue-router'

// COMPONENTES
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Chat from '../views/Chat.vue'
import Schedule from '../views/Schedule.vue'
import Notifications from '../views/Notifications.vue'
import Config from '../views/Config.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { title: 'WEBDEV' }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: 'DEV | HOME' }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: { title: 'DEV | CHAT' }
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule,
    meta: { title: 'DEV | SCHEDULE' }
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications,
    meta: { title: 'DEV | NOTIFICATIONS' }
  },
  {
    path: '/config',
    name: 'Config',
    component: Config,
    meta: { title: 'DEV | CONFIGURATIONS' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'DEV | ABOUT' }
  },
  {
    path: '*',
    name: 'Login',
    component: Login,
    meta: { title: 'WEBDEV' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
