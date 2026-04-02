<template lang="">
  <div>
     <footer class="bg-primary text-slate-300 py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div>
                    <div class="flex items-center space-x-3 mb-6">
                        <div class="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-sm">AH</div>
                        <h2 class="text-lg font-bold text-white tracking-wider">AL-HIKMAH</h2>
                    </div>
                    <p class="text-xs leading-relaxed">Jl. Pendidikan No. 123, Jakarta Selatan.<br>Email: info@alhikmah.sch.id<br>Telp: (021) 7654 321</p>
                </div>
                <div>
                    <h3 class="text-white font-bold mb-4">Navigasi</h3>
                    <ul class="text-xs space-y-2">
                        <li><a href="#" class="hover:text-secondary">Tentang Kami</a></li>
                        <li><a href="#" class="hover:text-secondary">Kurikulum</a></li>
                        <li><a href="#" class="hover:text-secondary">Pendaftaran</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-white font-bold mb-4">Sosial Media</h3>
                    <div class="flex space-x-4">
                        <div class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">IG</div>
                        <div class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">FB</div>
                        <div class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">YT</div>
                    </div>
                </div>
                <div>
                    <h3 class="text-white font-bold mb-4">Peta Lokasi</h3>
                    <div class="h-32 rounded-lg bg-slate-800 overflow-hidden text-[10px] flex items-center justify-center italic opacity-50">
                        [Google Maps Integration]
                    </div>
                </div>
            </div>
            <div class="mt-12 pt-8 border-t border-white/5 text-center text-[10px]">
                &copy; 2025 Pesantren Modern Al-Hikmah. All Rights Reserved.
            </div>
        </div>
    </footer>
  </div>
</template>
<script setup>
import $ from 'jquery'
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
</script>
<style lang="">

</style>