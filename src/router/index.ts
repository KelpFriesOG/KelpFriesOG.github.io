import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Home', component: Home },
      // Add more pages here
    ],
  },
  {
    path: '/about',
    component: DefaultLayout,
    children: [
      { path: '', name: 'About Me', component: About}
    ],
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
