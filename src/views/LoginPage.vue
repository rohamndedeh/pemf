<script setup lang="ts">

import { onMounted } from 'vue';
import { $ } from "jquery";

import { ref } from 'vue'
import { supabase } from '../utils/supabase'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')
const okMessage = ref('')

const handleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (error) {
    // Jika muncul "Invalid login credentials", 
    // berarti email/password salah atau user belum di-confirm
    errorMessage.value = 'Email atau kata sandi salah. Pastikan Anda sudah mendaftar dan mengonfirmasi email.'
  } else {
    okMessage.value = 'Login berhasil!'
    console.log("Session:", data.session)
    router.push('/admin/dashboard') // Arahkan ke halaman utama
  }
}

onMounted(() => {
  $(document).ready(function () {
    // Toggle Password Visibility
    $('#togglePassword').on('click', function () {
      const passwordInput = $('#password');
      const type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
      passwordInput.attr('type', type);

      // Change Icon
      if (type === 'text') {
        $(this).html('<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"></path></svg>');
      } else {
        $(this).html('<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>');
      }
    });

  });
})



</script>

<template>
  <div class="login-bg min-h-screen flex items-center justify-center p-4 font-sans">
    <div class="max-w-md w-full">
      <!-- Back to Home -->
      <router-link to="/" class="inline-flex items-center text-secondary hover:text-white transition-colors mb-8 group">
        <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none"
          stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        <span class="text-sm font-bold uppercase tracking-widest">Kembali ke Beranda</span>
      </router-link>

      <!-- Login Card -->
      <div class="glass-card rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        <div class="p-8 md:p-10">
          <!-- Header -->
          <div class="text-center mb-10">
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl shadow-lg mb-6 transform -rotate-6">
              <span class="text-secondary font-bold text-2xl">AH</span>
            </div>
            <h1 class="text-3xl font-serif text-primary mb-2">Ahlan wa Sahlan</h1>
            <p class="text-slate-500 text-sm">Masuk ke Portal Pesantren Al-Hikmah</p>
          </div>
          <div v-if="errorMessage" class="bg-red-50 p-3 rounded-lg mb-3 text-red-500 text-sm text-center font-medium">
            {{ errorMessage }}
          </div>
          <div v-if="okMessage" class="bg-green-50 p-3 rounded-lg mb-3 text-green-500 text-sm text-center font-medium">
            {{ okMessage }}
          </div>
          <!-- Form -->
          <form id="loginForm" class="space-y-6" @submit.prevent="handleLogin">
            <div>
              <label for="identity"
                class="block text-xs font-bold text-primary uppercase tracking-widest mb-2 ml-1">Email atau NIS</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </span>
                <input type="text" id="identity" name="identity" required v-model="email"
                  class="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all input-focus outline-none"
                  placeholder="Masukkan Email atau NIS">
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-2 ml-1">
                <label for="password" class="block text-xs font-bold text-primary uppercase tracking-widest">Kata
                  Sandi</label>
                <a href="#"
                  class="text-[10px] font-bold text-secondary hover:text-primary transition-colors uppercase tracking-tighter">Lupa
                  Sandi?</a>
              </div>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                    </path>
                  </svg>
                </span>
                <input type="password" id="password" name="password" required v-model="password"
                  class="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all input-focus outline-none"
                  placeholder="••••••••">
                <button type="button" id="togglePassword"
                  class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-primary">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                    </path>
                  </svg>
                </button>
              </div>
            </div>

            <div class="flex items-center">
              <input type="checkbox" id="remember"
                class="w-4 h-4 text-primary border-slate-300 rounded focus:ring-secondary cursor-pointer">
              <label for="remember" class="ml-2 text-xs text-slate-500 cursor-pointer select-none">Ingat saya di
                perangkat ini</label>
            </div>

            <button type="submit" :disabled="loading"
              class="w-full bg-primary text-secondary font-bold py-4 rounded-xl shadow-lg hover:shadow-primary/20 hover:bg-emerald-900 transition-all active:scale-[0.98] uppercase tracking-widest text-xs">
              {{ loading ? 'Memproses...' : 'Masuk Sekarang' }}
            </button>
          </form>

          <!-- Divider -->
          <div class="relative my-8">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-slate-200"></div>
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-white px-4 text-slate-400 tracking-widest">Atau</span>
            </div>
          </div>

          <!-- Footer Link -->
          <p class="text-center text-slate-500 text-sm">
            Belum punya akun?
            <router-link to="/register"
              class="text-primary font-bold hover:text-secondary transition-colors underline decoration-secondary decoration-2 underline-offset-4">Daftar
              User Baru</router-link>
          </p>
        </div>

        <!-- Bottom Accent -->
        <div class="h-2 bg-secondary w-full"></div>
      </div>

      <!-- Copyright -->
      <p class="text-center text-white/40 text-[10px] mt-8 uppercase tracking-[0.3em]">
        &copy; 2025 Pesantren Modern Al-Hikmah
      </p>
    </div>
  </div>
</template>

<style scoped>
.login-bg {
  background-color: #064e3b;
  background-image: url('https://www.transparenttextures.com/patterns/islamic-art.png');
}

.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.input-focus:focus {
  border-color: #d4af37;
  box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
}
</style>
