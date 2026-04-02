import AlumniPage from '@/views/AlumniPage.vue'
import BlogsPage from '@/views/BlogsPage.vue'
import FasilitasPage from '@/views/FasilitasPage.vue'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/HomePage.vue'
import KontakPage from '@/views/KontakPage.vue'
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
    {
      path: '/fasilitas',
      name: 'Fasilitas',
      component: FasilitasPage,
    },
    {
      path: '/kontak',
      name: 'Kontak',
      component: KontakPage,
    },
    {
      path: '/alumni',
      name: 'Alumni',
      component: AlumniPage,
    },
  ],
})

export default router
