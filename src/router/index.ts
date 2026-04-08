import AlumniPage from '@/views/AlumniPage.vue'
import BlogsPage from '@/views/BlogsPage.vue'
import FasilitasPage from '@/views/FasilitasPage.vue'
import HomePage from '@/views/HomePage.vue'
import KontakPage from '@/views/KontakPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TahfizhPage from '../views/TahfizhPage.vue'
import SekilasPage from '../views/SekilasPage.vue'
import ExtrakurikulerPage from '../views/ExtrakurikulerPage.vue'
import MandiriPage from '../views/MandiriPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/sekilas',
      name: 'Sekilas',
      component: SekilasPage,
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
    {
      path: '/tahfizh-quran',
      name: 'Tahfizh Quran',
      component: TahfizhPage,
    },
    {
      path: '/kemandirian',
      name: 'Kemandirian',
      component: MandiriPage,
    },
    {
      path: '/extrakurikuler',
      name: 'Exakurikuler',
      component: ExtrakurikulerPage,
    },
  ],
})

export default router
