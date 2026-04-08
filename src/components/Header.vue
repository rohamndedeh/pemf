<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
import { computed } from 'vue';
const pageName = computed(() => route.name);
const pageDescription = computed(() => route.meta.description || 'Deskripsi default jika tidak ada meta');


</script>
<template>
  <div>
    <header class="bg-primary py-16 md:py-24 relative overflow-hidden mt-16">
      <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]">
      </div>
      <div class="container mx-auto px-4 relative z-10 text-center">
        <h4 class="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4">Warta & Inspirasi</h4>
        <h1 class="text-4xl md:text-6xl font-serif text-white mb-6">{{ pageName }}</h1>
        <p class="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          {{ pageDescription }}
        </p>
      </div>
    </header>
  </div>
</template>

<style scoped></style>
``