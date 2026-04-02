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
                        <img src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e84?auto=format&fit=crop&q=80&w=600" class="w-full h-64 object-cover">
                        <div class="p-6">
                            <span class="text-secondary text-xs font-bold uppercase">04:30 AM</span>
                            <h3 class="text-lg font-bold mt-2">Shalat Tahajud & Subuh Berjamaah</h3>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide w-80">
                    <div class="rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
                        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600" class="w-full h-64 object-cover">
                        <div class="p-6">
                            <span class="text-secondary text-xs font-bold uppercase">08:00 AM</span>
                            <h3 class="text-lg font-bold mt-2">KBM Formal Kurikulum Diknas</h3>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide w-80">
                    <div class="rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
                        <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600" class="w-full h-64 object-cover">
                        <div class="p-6">
                            <span class="text-secondary text-xs font-bold uppercase">04:00 PM</span>
                            <h3 class="text-lg font-bold mt-2">Ekstrakurikuler Memanah & Berkuda</h3>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide w-80">
                    <div class="rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
                        <img src="https://images.unsplash.com/photo-1585829365234-78bc09e05730?auto=format&fit=crop&q=80&w=600" class="w-full h-64 object-cover">
                        <div class="p-6">
                            <span class="text-secondary text-xs font-bold uppercase">07:00 PM</span>
                            <h3 class="text-lg font-bold mt-2">Tahfidz & Muraja'ah Al-Qur'an</h3>
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