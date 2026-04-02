import BlogsPage from '@/views/BlogsPage.vue'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage,
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: BlogsPage,
    },
  ],
})

export default router
