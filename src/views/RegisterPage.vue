<script setup lang="ts">

import { onMounted } from 'vue';
import { $ } from "jquery";

import { ref } from 'vue'
import { supabase } from '../utils/supabase'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const fullName = ref('')
const loading = ref(false)
const errorMessage = ref('')
const okMessage = ref('')

const handleRegister = async () => {
  loading.value = true
  errorMessage.value = ''

  if (password.value != confirmPassword.value) {
    errorMessage.value = 'Kata sandi dan konfirmasi tidak cocok.'
    return
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          full_name: fullName.value,
        }
      }
    })

    if (error) throw error

    okMessage.value = 'Registrasi berhasil! Silakan cek email untuk verifikasi (jika aktif).'
    console.log("Berhasil Terdaftar:", data);
    // router.push('/login')

  } catch (error) {
    errorMessage.value = error.message
  } finally {
    loading.value = false
  }


}

onMounted(() => {
  $(document).ready(function () {
    // Toggle Password Visibility
    $('.toggle-pass').on('click', function () {
      const passwordInput = $(this).siblings('input');
      const type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
      $('#confirm_password').attr('type', type);
      passwordInput.attr('type', type);

      // Change Icon (Simple toggle)
      if (type === 'text') {
        $(this).css('color', '#d4af37');
      } else {
        $(this).css('color', '#94a3b8');
      }
    });
  });
})



</script>

<template>
  <div class="register-bg min-h-screen flex items-center justify-center p-4 md:p-8 font-sans">
    <div class="max-w-2xl w-full">
      <!-- Back to Home -->
      <div class="flex justify-between items-center mb-6">
        <router-link to="/" class="inline-flex items-center text-secondary hover:text-white transition-colors group">
          <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18">
            </path>
          </svg>
          <span class="text-xs font-bold uppercase tracking-widest">Beranda</span>
        </router-link>
        <span class="text-white/40 text-[10px] uppercase tracking-widest hidden md:block">Langkah Awal Menuju
          Barakah</span>
      </div>

      <!-- Register Card -->
      <div class="glass-card rounded-[2rem] shadow-2xl overflow-hidden border border-white/20">
        <div class="flex flex-col md:flex-row">
          <!-- Side Info (Hidden on Mobile) -->
          <div class="hidden md:flex md:w-1/3 bg-primary p-8 flex-col justify-between relative overflow-hidden">
            <div
              class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]">
            </div>
            <div class="relative z-10">
              <div
                class="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary font-bold text-xl mb-6">
                AH</div>
              <h2 class="text-white font-serif text-2xl mb-4 leading-tight">Bergabung dengan Keluarga Al-Hikmah</h2>
              <p class="text-white/60 text-xs leading-relaxed">Dapatkan akses ke sistem informasi santri, raport online,
                dan pendaftaran kegiatan kepesantrenan.</p>
            </div>
            <div class="relative z-10">
              <div class="flex -space-x-2 mb-4">
                <div class="w-8 h-8 rounded-full border-2 border-primary bg-slate-200"></div>
                <div class="w-8 h-8 rounded-full border-2 border-primary bg-slate-300"></div>
                <div class="w-8 h-8 rounded-full border-2 border-primary bg-slate-400"></div>
                <div
                  class="w-8 h-8 rounded-full border-2 border-primary bg-secondary flex items-center justify-center text-[8px] font-bold">
                  +1k</div>
              </div>
              <p class="text-white/40 text-[9px] uppercase tracking-tighter">Sudah terdaftar di sistem kami</p>
            </div>
          </div>

          <!-- Form Area -->
          <div class="w-full md:w-2/3 p-8 md:p-12">
            <div class="mb-8">
              <h1 class="text-2xl font-serif text-primary mb-1">Daftar Akun Baru</h1>
              <p class="text-slate-400 text-xs">Silakan lengkapi data untuk membuat akun portal</p>
            </div>
            <div v-if="errorMessage" class="bg-red-50 p-3 rounded-lg mb-3 text-red-500 text-sm text-center font-medium">
              {{ errorMessage }}
            </div>
            <div v-if="okMessage"
              class="bg-green-50 p-3 rounded-lg mb-3 text-green-500 text-sm text-center font-medium">
              {{ okMessage }}
            </div>

            <form id="registerForm" class="space-y-5" @submit.prevent="handleRegister">
              <div>
                <label for="fullname"
                  class="block text-[10px] font-bold text-primary uppercase tracking-widest mb-1.5 ml-1">Nama
                  Lengkap</label>
                <input type="text" id="fullname" name="fullname" required v-model="fullName"
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all input-focus outline-none"
                  placeholder="Nama Lengkap">
              </div>


              <!-- Email -->
              <div>
                <label for="email"
                  class="block text-[10px] font-bold text-primary uppercase tracking-widest mb-1.5 ml-1">Alamat
                  Email</label>
                <input type="email" id="email" name="email" required v-model="email"
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all input-focus outline-none"
                  placeholder="nama@contoh.com">
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <!-- Password -->
                <div>
                  <label for="password"
                    class="block text-[10px] font-bold text-primary uppercase tracking-widest mb-1.5 ml-1">Kata
                    Sandi</label>
                  <div class="relative">
                    <input type="password" id="password" name="password" required v-model="password"
                      class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all input-focus outline-none"
                      placeholder="••••••••">
                    <button type="button"
                      class="toggle-pass absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-primary">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
                <!-- Confirm Password -->
                <div>
                  <label for="confirm_password"
                    class="block text-[10px] font-bold text-primary uppercase tracking-widest mb-1.5 ml-1">Konfirmasi</label>
                  <div class="relative">
                    <input type="password" id="confirm_password" name="confirm_password" required
                      v-model="confirmPassword"
                      class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all input-focus outline-none"
                      placeholder="••••••••">
                  </div>
                </div>
              </div>

              <div class="flex items-start">
                <input type="checkbox" id="terms" required
                  class="mt-1 w-4 h-4 text-primary border-slate-300 rounded focus:ring-secondary cursor-pointer">
                <label for="terms" class="ml-3 text-[10px] text-slate-500 leading-relaxed cursor-pointer select-none">
                  Saya setuju dengan <a href="#" class="text-primary font-bold hover:underline">Syarat & Ketentuan</a>
                  serta <a href="#" class="text-primary font-bold hover:underline">Kebijakan Privasi</a> Pesantren
                  Al-Hikmah.
                </label>
              </div>

              <button type="submit" :disabled="loading"
                class="w-full bg-primary text-secondary font-bold py-4 rounded-xl shadow-lg hover:shadow-primary/20 hover:bg-emerald-900 transition-all active:scale-[0.98] uppercase tracking-widest text-xs mt-4">
                {{ loading ? 'Memproses...' : 'Daftar Sekarang' }}
              </button>
            </form>

            <div class="mt-8 pt-6 border-t border-slate-100 text-center">
              <p class="text-slate-500 text-xs">
                Sudah punya akun?
                <router-link to="/login"
                  class="text-primary font-bold hover:text-secondary transition-colors underline decoration-secondary decoration-2 underline-offset-4 ml-1">Masuk
                  di sini</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Support Info -->
      <div
        class="mt-8 flex flex-col md:flex-row items-center justify-between text-white/50 text-[9px] uppercase tracking-widest gap-4">
        <div class="flex items-center">
          <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Butuh bantuan teknis? Hubungi (021) 7654-3210
        </div>
        <div>&copy; 2025 Pesantren Modern Al-Hikmah</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-bg {
  background-color: #064e3b;
  background-image: url('https://www.transparenttextures.com/patterns/islamic-art.png');
}

.glass-card {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
}

.input-focus:focus {
  border-color: #d4af37;
  box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
}

/* Custom scrollbar for the form if it gets too long on small screens */
.custom-scroll::-webkit-scrollbar {
  width: 4px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background: #d4af37;
  border-radius: 10px;
}
</style>
