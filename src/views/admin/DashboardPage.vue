<script setup lang="ts">
import { onMounted } from 'vue';
import { $ } from "jquery";
import { supabase } from '../../utils/supabase'


</script>

<template>
  <div class="p-4 md:p-8 overflow-y-auto">
    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-6 rounded-2xl custom-shadow border-b-4 border-primary">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-emerald-50 text-primary rounded-xl">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
              </path>
            </svg>
          </div>
          <span class="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">+12%</span>
        </div>
        <h3 class="text-slate-400 text-xs font-bold uppercase tracking-widest">Total Santri</h3>
        <p class="text-2xl font-bold text-primary mt-1">1.240</p>
      </div>

      <div class="bg-white p-6 rounded-2xl custom-shadow border-b-4 border-secondary">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-yellow-50 text-secondary rounded-xl">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
              </path>
            </svg>
          </div>
          <span class="text-[10px] font-bold text-secondary bg-yellow-50 px-2 py-1 rounded">Pending</span>
        </div>
        <h3 class="text-slate-400 text-xs font-bold uppercase tracking-widest">Pendaftar Baru</h3>
        <p class="text-2xl font-bold text-primary mt-1">45</p>
      </div>

      <div class="bg-white p-6 rounded-2xl custom-shadow border-b-4 border-emerald-400">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-blue-50 text-blue-500 rounded-xl">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z">
              </path>
            </svg>
          </div>
        </div>
        <h3 class="text-slate-400 text-xs font-bold uppercase tracking-widest">Warta Aktif</h3>
        <p class="text-2xl font-bold text-primary mt-1">128</p>
      </div>

      <div class="bg-white p-6 rounded-2xl custom-shadow border-b-4 border-slate-300">
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-purple-50 text-purple-500 rounded-xl">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
              </path>
            </svg>
          </div>
        </div>
        <h3 class="text-slate-400 text-xs font-bold uppercase tracking-widest">Dewan Guru</h3>
        <p class="text-2xl font-bold text-primary mt-1">82</p>
      </div>
    </div>

    <!-- Tables & Charts -->
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
      <!-- Recent Activity Table -->
      <div class="xl:col-span-2 bg-white rounded-2xl custom-shadow overflow-hidden">
        <div class="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 class="font-bold text-primary uppercase text-xs tracking-widest">Data Santri Terbaru</h3>
          <button class="text-[10px] font-bold text-secondary hover:underline">Lihat Semua</button>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead class="bg-slate-50 text-[10px] uppercase font-bold text-slate-400">
              <tr>
                <th class="px-6 py-4">Nama Santri</th>
                <th class="px-6 py-4">NIS</th>
                <th class="px-6 py-4">Kelas</th>
                <th class="px-6 py-4">Status</th>
                <th class="px-6 py-4">Aksi</th>
              </tr>
            </thead>
            <tbody class="text-xs divide-y divide-slate-100">
              <tr class="hover:bg-slate-50 transition">
                <td class="px-6 py-4 font-bold text-primary">Ahmad Fauzan</td>
                <td class="px-6 py-4 text-slate-500">202401012</td>
                <td class="px-6 py-4 text-slate-500">12 - IPA 1</td>
                <td class="px-6 py-4">
                  <span
                    class="bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full text-[10px] font-bold">Aktif</span>
                </td>
                <td class="px-6 py-4">
                  <button class="text-slate-400 hover:text-primary mr-2">Edit</button>
                </td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="px-6 py-4 font-bold text-primary">Siti Aminah</td>
                <td class="px-6 py-4 text-slate-500">202401056</td>
                <td class="px-6 py-4 text-slate-500">10 - IPS 2</td>
                <td class="px-6 py-4">
                  <span
                    class="bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full text-[10px] font-bold">Aktif</span>
                </td>
                <td class="px-6 py-4">
                  <button class="text-slate-400 hover:text-primary mr-2">Edit</button>
                </td>
              </tr>
              <tr class="hover:bg-slate-50 transition">
                <td class="px-6 py-4 font-bold text-primary">Muhammad Rizky</td>
                <td class="px-6 py-4 text-slate-500">202401089</td>
                <td class="px-6 py-4 text-slate-500">11 - Bahasa</td>
                <td class="px-6 py-4">
                  <span class="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded-full text-[10px] font-bold">Izin</span>
                </td>
                <td class="px-6 py-4">
                  <button class="text-slate-400 hover:text-primary mr-2">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Side Notifications / Agenda -->
      <div class="bg-white rounded-2xl custom-shadow p-6">
        <h3
          class="font-bold text-primary uppercase text-xs tracking-widest mb-6 border-b-2 border-secondary inline-block pb-1">
          Log Aktivitas</h3>
        <div class="space-y-6">
          <div class="flex gap-4">
            <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0"></div>
            <div>
              <p class="text-xs font-bold text-primary">Pendaftaran Baru</p>
              <p class="text-[10px] text-slate-400 mt-1">Calon santri: Budi Santoso melakukan pendaftaran online.
              </p>
              <span class="text-[9px] text-slate-300 mt-2 block">10 menit yang lalu</span>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
            <div>
              <p class="text-xs font-bold text-primary">Update Warta</p>
              <p class="text-[10px] text-slate-400 mt-1">Admin Fauzan menerbitkan artikel "Adab Mendahului Ilmu".
              </p>
              <span class="text-[9px] text-slate-300 mt-2 block">2 jam yang lalu</span>
            </div>
          </div>
        </div>
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
</style>
