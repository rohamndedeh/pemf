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
      meta: {
        title: 'Selamat Datang di Website Resmi Pondok Pesantren Al-Muhajirin',
        description:
          'Pondok Pesantren Al-Muhajirin adalah lembaga pendidikan Islam yang berkomitmen untuk memberikan pendidikan berkualitas tinggi kepada santri-santrinya. Kami menyediakan lingkungan yang kondusif untuk belajar, beribadah, dan berkembang secara spiritual.',
      },
    },
    {
      path: '/sekilas',
      name: 'Sekilas',
      component: SekilasPage,
      meta: {
        title: 'Sekilas tentang Pondok Pesantren Al-Muhajirin',
        description:
          'Temukan informasi singkat tentang pondok pesantren kami dan visi misi yang kami geluti.',
      },
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: BlogsPage,
      meta: {
        title: 'Blog Pondok Pesantren Al-Muhajirin',
        description:
          'Baca artikel-artikel menarik tentang kegiatan dan perkembangan pondok pesantren kami.',
      },
    },
    {
      path: '/fasilitas',
      name: 'Fasilitas',
      component: FasilitasPage,
      meta: {
        title: 'Fasilitas di Pondok Pesantren Al-Muhajirin',
        description:
          'Jelajahi fasilitas yang tersedia di pondok pesantren kami untuk mendukung proses belajar dan beribadah santri.',
      },
    },
    {
      path: '/kontak',
      name: 'Kontak',
      component: KontakPage,
      meta: {
        title: 'Kontak Pondok Pesantren Al-Muhajirin',
        description: 'Hubungi kami untuk informasi lebih lanjut tentang pondok pesantren kami.',
      },
    },
    {
      path: '/alumni',
      name: 'Alumni',
      component: AlumniPage,
      meta: {
        title: 'Alumni Pondok Pesantren Al-Muhajirin',
        description:
          'Kenali para alumni kami yang telah sukses di berbagai bidang setelah menimba ilmu di pondok pesantren kami.',
      },
    },
    {
      path: '/tahfizh-quran',
      name: 'Tahfizh Quran',
      component: TahfizhPage,
      meta: {
        title: 'Tahfizh Quran',
        description:
          'Program tahfizh quran di pondok pesantren kami untuk membantu santri menghafal Al-Quran dengan baik.',
      },
    },
    {
      path: '/kemandirian',
      name: 'Kemandirian',
      component: MandiriPage,
      meta: {
        title: 'Kemandirian',
        description:
          'Program kemandirian di pondok pesantren kami untuk membantu santri mengembangkan keterampilan dan sikap mandiri.',
      },
    },
    {
      path: '/extrakurikuler',
      name: 'Exakurikuler',
      component: ExtrakurikulerPage,
      meta: {
        title: 'Extrakurikuler',
        description:
          'Berbagai kegiatan ekstrakurikuler yang tersedia di pondok pesantren kami untuk mendukung pengembangan bakat dan minat santri.',
      },
    },
  ],
})

export default router
