<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { supabase } from '../utils/supabase'
import { computed } from 'vue'
import { onMounted } from 'vue';
import { $ } from "jquery";

const router = useRouter()
const route = useRoute()

// Ambil nama halaman dari meta rute untuk judul header admin
const pageTitle = computed(() => route.meta.title || route.name || 'Admin Panel')

const handleLogout = async () => {
  const { error } = await supabase.auth.signOut()
  if (!error) {
    router.push('/login')
  }
}

onMounted(() => {
  $(document).ready(function () {
    // Sidebar Toggle
    $('#sidebar-toggle, #overlay').on('click', function () {
      $('#sidebar').toggleClass('open');
      $('#overlay').toggleClass('hidden');
      $('body').toggleClass('overflow-hidden');
    });

    // Handle Sidebar Link Active State
    $('.sidebar-link').on('click', function (e) {
      // Jangan cegah default jika ada tautan asli, tapi untuk demo kita aktifkan class
      $('.sidebar-link').removeClass('active').addClass('text-white/70');
      $(this).addClass('active').removeClass('text-white/70');
    });

    // Notification Button Click
    $('#notif-btn').on('click', function () {
      $('#notif-dot').fadeOut();
      // Opsional: Tampilkan dropdown notifikasi di sini
      console.log("Notifikasi dibuka");
    });

    // Clear Log Activity
    $('#clear-logs').on('click', function () {
      $('#activity-log-container').fadeOut(300, function () {
        $(this).empty().fadeIn();
      });
    });

    // Function to add new activity log
    function addActivityLog(title, desc, type = 'secondary') {
      const colorClass = type === 'primary' ? 'bg-primary' : (type === 'secondary' ? 'bg-secondary' : 'bg-slate-300');
      const logHtml = `
                    <div class="flex gap-4 relative new-log">
                        <div class="w-1.5 h-1.5 rounded-full ${colorClass} mt-1.5 flex-shrink-0 z-10"></div>
                        <div class="absolute left-[2px] top-4 bottom-0 w-[1px] bg-slate-100"></div>
                        <div>
                            <p class="text-xs font-bold text-primary">${title}</p>
                            <p class="text-[10px] text-slate-400 mt-1 leading-relaxed">${desc}</p>
                            <span class="text-[9px] text-slate-300 mt-2 block italic">Baru saja</span>
                        </div>
                    </div>
                `;
      $('#activity-log-container').prepend(logHtml);
      $('#notif-dot').fadeIn(); // Tampilkan titik merah di bell
    }

    // Simulasi log otomatis setiap beberapa detik (opsional) atau via tombol
    $('#simulate-log').on('click', function () {
      const logs = [
        { title: "Pembayaran SPP", desc: "Santri Ali bin Abi Thalib telah melunasi SPP bulan Mei.", type: "secondary" },
        { title: "Input Nilai", desc: "Ustadzah Fatimah memperbarui nilai Tahfidz Kelas 10-A.", type: "primary" },
        { title: "Login Terdeteksi", desc: "Perangkat baru masuk ke akun Admin Fauzan.", type: "neutral" }
      ];
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      addActivityLog(randomLog.title, randomLog.randomLog || randomLog.desc, randomLog.type);
    });
  });
})
</script>

<template>
  <div class="bg-slate-50 font-sans text-slate-900">
    <div id="overlay" class="fixed inset-0 bg-black/50 z-40 hidden lg:hidden"></div>

    <div class="flex min-h-screen">
      <!-- Sidebar -->
      <aside id="sidebar"
        class="fixed inset-y-0 left-0 w-72 bg-primary text-white z-50 flex flex-col lg:static lg:translate-x-0">
        <div class="p-8 flex items-center space-x-3">
          <div
            class="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-primary font-bold text-lg shadow-lg">
            AH</div>
          <div>
            <h1 class="font-bold tracking-wider text-sm uppercase">Al-Hikmah</h1>
            <p class="text-[10px] text-secondary font-medium tracking-widest uppercase">{{ pageTitle }}</p>
          </div>
        </div>

        <nav class="flex-grow mt-4 overflow-y-auto">
          <div class="px-8 mb-4">
            <p class="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Menu Utama</p>
          </div>
          <a href="#" class="sidebar-link active flex items-center px-8 py-4 text-sm transition-all hover:bg-white/5">
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
              </path>
            </svg>
            Dashboard
          </a>
          <a href="#"
            class="sidebar-link flex items-center px-8 py-4 text-sm transition-all hover:bg-white/5 text-white/70 hover:text-white">
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
              </path>
            </svg>
            Data Santri
          </a>
          <a href="#"
            class="sidebar-link flex items-center px-8 py-4 text-sm transition-all hover:bg-white/5 text-white/70 hover:text-white">
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
              </path>
            </svg>
            Keuangan
          </a>
          <a href="#"
            class="sidebar-link flex items-center px-8 py-4 text-sm transition-all hover:bg-white/5 text-white/70 hover:text-white">
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
              </path>
            </svg>
            Manajemen Blog
          </a>

          <div class="px-8 mt-8 mb-4">
            <p class="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Sistem</p>
          </div>
          <a href="#"
            class="sidebar-link flex items-center px-8 py-4 text-sm transition-all hover:bg-white/5 text-white/70 hover:text-white">
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
              </path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            Pengaturan
          </a>
        </nav>

        <div class="p-8 border-t border-white/5">
          <div class="flex items-center space-x-3">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
              class="w-10 h-10 rounded-full border-2 border-secondary object-cover">
            <div class="overflow-hidden">
              <p class="text-xs font-bold truncate">Admin Fauzan</p>
              <p class="text-[10px] text-white/50">Super Administrator</p>
            </div>
          </div>
          <button @click="handleLogout"
            class="mt-4 w-full bg-white/5 hover:bg-white/10 text-[10px] font-bold py-2 rounded uppercase tracking-widest transition">Keluar</button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-grow flex flex-col min-w-0">
        <!-- Header -->
        <header class="bg-white h-20 px-4 md:px-8 flex items-center justify-between border-b border-slate-200">
          <div class="flex items-center">
            <button id="sidebar-toggle" class="lg:hidden p-2 text-primary">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <h2 class="text-lg font-bold text-primary ml-4 lg:ml-0">{{ pageTitle || 'Dashboard' }}</h2>
          </div>

          <div class="flex items-center space-x-4 md:space-x-6">
            <div class="relative hidden md:block">
              <input type="text" placeholder="Cari data..."
                class="bg-slate-100 border-none rounded-full px-5 py-2 text-xs focus:ring-2 focus:ring-secondary w-64">
              <svg class="w-4 h-4 absolute right-4 top-2.5 text-slate-400" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <button class="relative p-2 text-slate-400 hover:text-primary transition" id="notif-btn">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                </path>
              </svg>
              <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        <!-- Content Area -->

        <router-view />
      </main>

      <div class="bg-white rounded-2xl custom-shadow p-6 hidden flex flex-col h-full">
        <div class="flex items-center justify-between mb-6 border-b border-slate-100 pb-2">
          <h3
            class="font-bold text-primary uppercase text-xs tracking-widest border-b-2 border-secondary inline-block pb-1">
            Log Aktivitas</h3>
          <button class="text-[10px] text-slate-400 hover:text-primary" id="clear-logs">Bersihkan</button>
        </div>

        <div class="log-scroll space-y-6 flex-grow pr-2 text-left" id="activity-log-container">
          <!-- Contoh Log 1 -->
          <div class="flex gap-4 relative">
            <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0 z-10"></div>
            <div class="absolute left-[2px] top-4 bottom-0 w-[1px] bg-slate-100"></div>
            <div>
              <p class="text-xs font-bold text-primary">Pendaftaran Baru</p>
              <p class="text-[10px] text-slate-400 mt-1 leading-relaxed">Calon santri: Budi Santoso melakukan
                pendaftaran online melalui portal mandiri.</p>
              <span class="text-[9px] text-slate-300 mt-2 block italic">Baru saja</span>
            </div>
          </div>

          <!-- Contoh Log 2 -->
          <div class="flex gap-4 relative">
            <div class="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0 z-10"></div>
            <div class="absolute left-[2px] top-4 bottom-0 w-[1px] bg-slate-100"></div>
            <div>
              <p class="text-xs font-bold text-primary">Update Warta</p>
              <p class="text-[10px] text-slate-400 mt-1 leading-relaxed">Admin Fauzan menerbitkan artikel "Adab
                Mendahului Ilmu" di kolom Kata Ustadz.</p>
              <span class="text-[9px] text-slate-300 mt-2 block italic">2 jam yang lalu</span>
            </div>
          </div>

          <!-- Contoh Log 3 -->
          <div class="flex gap-4 relative">
            <div class="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0 z-10"></div>
            <div>
              <p class="text-xs font-bold text-primary">Sistem Backup</p>
              <p class="text-[10px] text-slate-400 mt-1 leading-relaxed">Pencadangan basis data otomatis mingguan
                berhasil diselesaikan.</p>
              <span class="text-[9px] text-slate-300 mt-2 block italic">Kemarin, 03:00</span>
            </div>
          </div>
        </div>

        <button id="simulate-log"
          class="mt-6 text-[10px] font-bold text-white bg-primary/10 text-primary py-2 rounded hover:bg-primary hover:text-white transition uppercase tracking-widest">
          Simulasi Log Masuk
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.sidebar-link.active {
  background-color: rgba(212, 175, 55, 0.1);
  border-left: 4px solid #d4af37;
  color: #d4af37;
}

.custom-shadow {
  box-shadow: 0 10px 15px -3px rgba(6, 78, 59, 0.05);
}

#sidebar {
  transition: all 0.3s ease;
}

@media (max-width: 1024px) {
  #sidebar {
    transform: translateX(-100%);
  }

  #sidebar.open {
    transform: translateX(0);
  }
}

/* Animasi untuk notifikasi baru */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.new-log {
  animation: slideIn 0.5s ease forwards;
}

.log-scroll {
  max-height: 400px;
  overflow-y: auto;
}

.log-scroll::-webkit-scrollbar {
  width: 4px;
}

.log-scroll::-webkit-scrollbar-thumb {
  background: #d4af37;
  border-radius: 10px;
}
</style>