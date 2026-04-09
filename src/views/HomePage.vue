<script setup lang="ts">
import About from '@/components/About.vue';
import Aktivitas from '@/components/Aktivitas.vue';
import Fasilitas from '@/components/Fasilitas.vue';
import Guru from '@/components/Guru.vue';
import Hero from '@/components/Hero.vue';

import $ from 'jquery'


import { onMounted } from 'vue';
onMounted(() => {

  $(document).ready(function () {
    // Mobile Menu Logic
    $('#mobile-toggle').on('click', function () {
      $('#mobile-menu').addClass('active');
      $('body').addClass('overflow-hidden');
    });

    $('#mobile-close, #mobile-menu a').on('click', function () {
      $('#mobile-menu').removeClass('active');
      $('body').removeClass('overflow-hidden');
    });

    const mainSwiper = new Swiper('.cube-slider', {
      effect: 'cube',
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // Activities Slider
    const activitiesSwiper = new Swiper('.swiper-kegiatan', {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: false,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.swiper-next-kegiatan',
        prevEl: '.swiper-prev-kegiatan',
      },
    });

    // Facility Modal with SweetAlert
    $('.btn-facility').on('click', function () {
      const title = $(this).data('title');
      const desc = $(this).data('desc');
      const img = $(this).data('img');

      Swal.fire({
        title: `<span class="font-serif text-primary">${title}</span>`,
        html: `
                          <div class="text-left mt-4">
                              <img src="${img}" class="w-full h-48 object-cover rounded-xl mb-4 shadow-lg border-b-4 border-[#d4af37]">
                              <p class="text-slate-600 leading-relaxed">${desc}</p>
                              <div class="grid grid-cols-2 gap-2 mt-4">
                                  <img src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=300" class="rounded-lg h-24 w-full object-cover grayscale hover:grayscale-0 transition">
                                  <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=300" class="rounded-lg h-24 w-full object-cover grayscale hover:grayscale-0 transition">
                              </div>
                          </div>
                      `,
        showConfirmButton: true,
        confirmButtonText: 'Tutup',
        confirmButtonColor: '#064e3b',
        padding: '2rem',
        background: '#fdfbf0',
      });
    });

    // Smooth Scroll
    $('a[href^="#"]').on('click', function (event) {
      const target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 70
        }, 600);
      }
    });

  });
})


</script>

<template>
  <div>
    <Hero />
    <About />
    <Fasilitas />
    <Aktivitas />
    <Guru />

  </div>
</template>

<style scoped></style>
