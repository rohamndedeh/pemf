<script setup>
</script>

<template>
  <nav class="fixed top-0 w-full z-50 sticky-nav border-b border-secondary/20 text-white">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <div
          class="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-lg md:text-xl">
          <img src="/logo.jpg" class="rounded-full" alt="">
        </div>
        <div>
          <h1 class="text-sm md:text-lg font-bold leading-tight uppercase tracking-wider">Miftahul Falah</h1>
          <p class="text-[8px] md:text-[10px] text-secondary font-medium tracking-[0.2em] uppercase">Pesantren
            Entreprenuer
          </p>
        </div>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center space-x-8">
        <router-link to="/" id="home" class="nav-link font-medium hover:text-secondary transition">Beranda</router-link>

        <div class="relative group dropdown">
          <button class="nav-link font-medium hover:text-secondary flex items-center">
            Tentang <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div class="dropdown-menu absolute hidden pt-4 w-48">
            <div class="bg-white text-primary rounded-lg shadow-xl overflow-hidden py-2 border-t-4 border-secondary">
              <router-link to="/sekilas" class="block px-4 py-2 hover:bg-accent transition">Sekolas</router-link>
              <router-link to="/tahfizh-quran" class="block px-4 py-2 hover:bg-accent transition">Tahfizh
                Quran</router-link>
              <router-link to="/fasilitas" class="block px-4 py-2 hover:bg-accent transition">Fasilitas</router-link>
              <router-link to="/extrakurikuler"
                class="block px-4 py-2 hover:bg-accent transition">Extrakurikuler</router-link>
            </div>
          </div>
        </div>

        <router-link to="/alumni" class="nav-link font-medium hover:text-secondary transition">Alumni</router-link>
        <router-link to="/kemadirian"
          class="nav-link font-medium hover:text-secondary transition">Kemandirian</router-link>
        <router-link to="/blogs" class="nav-link font-medium hover:text-secondary transition">Blog</router-link>

        <!-- Language Toggle -->
        <div class="flex items-center space-x-2 bg-primary/50 px-3 py-1 rounded-full border border-secondary/30">
          <button class="text-xs font-bold text-secondary">ID</button>
          <span class="text-secondary/30">|</span>
          <button class="text-xs hover:text-secondary">EN</button>
        </div>

        <a href="#pendaftaran"
          class="bg-secondary hover:bg-yellow-600 text-primary font-bold px-6 py-2 rounded-full transition duration-300">
          Daftar
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button class="lg:hidden text-secondary p-2 focus:outline-none" id="mobile-toggle">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu Sidebar -->
  <div id="mobile-menu" class="fixed inset-0 z-[60] lg:hidden">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-primary/95"></div>

    <div class="relative h-full w-full flex flex-col p-8">
      <button class="self-end text-secondary mb-12" id="mobile-close">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <nav class="flex flex-col space-y-6 text-center">
        <router-link to="/" class="text-2xl font-serif text-white hover:text-secondary transition">Beranda</router-link>
        <router-link to="/sekilas" class="text-2xl font-serif text-white hover:text-secondary transition">Tentang
          Kami</router-link>
        <router-link to="/alumni"
          class="text-2xl font-serif text-white hover:text-secondary transition">Fasilitas</router-link>
        <router-link to="/tahfizh-quran" class="text-2xl font-serif text-white hover:text-secondary transition">Tahfizh
          Quran</router-link>
        <router-link to="/kemandirian"
          class="text-2xl font-serif text-white hover:text-secondary transition">Kemandirian</router-link>
        <router-link to="/blogs"
          class="text-2xl font-serif text-white hover:text-secondary transition">Blogs</router-link>

        <div class="pt-6 border-t border-white/10 flex justify-center space-x-6">
          <button class="text-secondary font-bold">INDONESIA</button>
          <span class="text-white/20">|</span>
          <button class="text-white/60">ENGLISH</button>
        </div>

        <a href="#pendaftaran" class="bg-secondary text-primary font-bold py-4 rounded-xl text-xl shadow-lg mt-4">
          Daftar Sekarang
        </a>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
