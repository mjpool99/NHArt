import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      enterClass: "animate__animated animate__fadeIn",
      leaveClass: "animate__animated animate__fadeOut"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      enterClass: "animate__animated animate__fadeIn animate__delay-2s",
      leaveClass: "animate__animated animate__fadeOut"
    }
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('../views/Work.vue'),
    meta: {
      enterClass: "animate__animated animate__fadeIn animate__delay-2s",
      leaveClass: "animate__animated animate__fadeOut"
    }
  },
  {
    path: '/shows',
    name: 'Shows',
    component: () => import('../views/Shows.vue'),
    meta: {
      enterClass: "animate__animated animate__fadeIn animate__delay-2s",
      leaveClass: "animate__animated animate__fadeOut"
    }
  },
  {
    path: '/login',
    name: 'AdminLogin',
    component: () => import('../views/AdminLogin.vue'),
    meta: {
      enterClass: "animate__animated animate__fadeIn animate__delay-2s",
      leaveClass: "animate__animated animate__fadeOut"
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: {
      enterClass: "animate__animated animate__fadeIn animate__delay-2s",
      leaveClass: "animate__animated animate__fadeOut"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
