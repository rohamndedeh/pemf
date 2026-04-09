<template lang="">
  <div>
     <section id="kegiatan" class="py-20 bg-primary text-white overflow-hidden">
        <div class="container mx-auto px-4 mb-12 flex items-end justify-between">
            <div>
                <h4 class="text-secondary font-bold tracking-widest uppercase mb-2">Kegiatan</h4>
                <h2 class="text-4xl font-serif">Aktivitas Harian Santri</h2>
            </div>
            <div class="flex space-x-4">
                <button class="swiper-prev-kegiatan p-3 rounded-full border border-secondary text-secondary hover:bg-secondary hover:text-primary transition">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button class="swiper-next-kegiatan p-3 rounded-full bg-secondary text-primary hover:bg-yellow-600 transition">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </div>

        <div class="swiper swiper-kegiatan px-4">
            <div class="swiper-wrapper">
                <div class="swiper-slide w-80">
                    <div class="rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
                        <img src="/foto/10.jpg" class="w-full h-64 object-cover">
                        <div class="p-6">
                            <span class="text-secondary text-xs font-bold uppercase"></span>
                            <h3 class="text-lg font-bold mt-2">Shalat Tahajud & Subuh Berjamaah</h3>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide w-80">
                    <div class="rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
                        <img src="/foto/11.jpg" class="w-full h-64 object-cover">
                        <div class="p-6">
                            <span class="text-secondary text-xs font-bold uppercase"></span>
                            <h3 class="text-lg font-bold mt-2">Kajian Subuh</h3>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide w-80">
                    <div class="rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
                        <img src="/foto/12.jpg" class="w-full h-64 object-cover">
                        <div class="p-6">
                            <span class="text-secondary text-xs font-bold uppercase"></span>
                            <h3 class="text-lg font-bold mt-2">Kerja Bakti</h3>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide w-80">
                    <div class="rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
                        <img src="/foto/13.jpg" class="w-full h-64 object-cover">
                        <div class="p-6">
                            <span class="text-secondary text-xs font-bold uppercase"></span>
                            <h3 class="text-lg font-bold mt-2">Olahraga Pagi</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>