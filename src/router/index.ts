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
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import DashboardPage from '../views/admin/DashboardPage.vue'
import AdminLayout from '../layouts/AdminLayout.vue'
import { supabase } from '../utils/supabase'

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
      name: 'Bahasa Arab',
      component: FasilitasPage,
      meta: {
        title: 'Program Bahasa Arab di Pondok Pesantren Al-Muhajirin',
        description:
          'Jelajahi program bahasa Arab yang tersedia di pondok pesantren kami untuk mendukung proses belajar santri.',
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
      name: 'Entrepreneurship',
      component: ExtrakurikulerPage,
      meta: {
        title: 'Entrepreneurship',
        description:
          'Program entrepreneurship di pondok pesantren kami untuk membantu santri mengembangkan keterampilan dan sikap kewirausahaan.',
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
      meta: {
        title: 'Login',
        description: 'Masuk ke akun Anda di pondok pesantren kami.',
        hideNavigation: true,
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage,
      meta: {
        title: 'Register',
        description: 'Buat akun baru di pondok pesantren kami.',
        hideNavigation: true,
      },
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminLayout,
      meta: {
        title: 'Dashboard',
        description: 'Halaman utama setelah login.',
        hideNavigation: true,
        requiresAuth: true,
      },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard Admin',
          component: DashboardPage,
          meta: { title: 'Dashboard Admin' },
        },
      ],
    },
  ],
})

router.beforeEach(async (to, from) => {
  const { data } = await supabase.auth.getSession()
  const isLoggedIn = !!data.session

  // 1. Jika rute butuh login tapi user BELUM login
  if (to.meta.requiresAuth && !isLoggedIn) {
    // Kembalikan objek lokasi untuk redirect (seperti 'return' di fungsi biasa)
    return { name: 'Login' }
  }

  // 2. Jika user SUDAH login tapi mau buka halaman login lagi
  if (to.path === '/login' && isLoggedIn) {
    // Kembalikan arah ke dashboard admin
    return { path: '/admin/dashboard' }
  }

  // 3. Jika tidak ada masalah, jangan return apa-apa (atau return true)
  // Ini sama dengan memanggil next() di versi lama
  return true
})

export default router
