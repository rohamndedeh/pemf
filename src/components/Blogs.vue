<template lang="">
  <div>
    <section id="blog" class="py-20 bg-accent/50">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row gap-16">
                <!-- Blog List -->
                <div class="lg:w-2/3">
                    <div class="flex items-center justify-between mb-10">
                        <h2 class="text-3xl font-serif text-primary">Berita Terbaru</h2>
                        <a href="#" class="text-secondary font-bold text-sm hover:underline">Lihat Semua</a>
                    </div>
                    <div class="space-y-8">
                        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition">
                            <img src="https://images.unsplash.com/photo-1524178232363-1fb280714553?auto=format&fit=crop&q=80&w=300" class="w-full md:w-48 h-32 object-cover rounded-xl">
                            <div>
                                <span class="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Prestasi</span>
                                <h3 class="text-xl font-bold text-primary mt-2 mb-2 hover:text-secondary transition cursor-pointer">Santri Al-Hikmah Juarai MTQ Internasional di Turki</h3>
                                <p class="text-slate-500 text-sm line-clamp-2">Capaian luar biasa diraih oleh Ananda Ahmad Fauzan dalam ajang bergengsi Musabaqah Tilawatil Qur'an...</p>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition">
                            <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=300" class="w-full md:w-48 h-32 object-cover rounded-xl">
                            <div>
                                <span class="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Akademik</span>
                                <h3 class="text-xl font-bold text-primary mt-2 mb-2 hover:text-secondary transition cursor-pointer">Implementasi Kurikulum Merdeka di Pesantren Modern</h3>
                                <p class="text-slate-500 text-sm line-clamp-2">Sinergi antara nilai kepesantrenan dan kurikulum terbaru untuk meningkatkan kemandirian belajar santri...</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Agenda Section -->
                <div class="lg:w-1/3">
                    <h2 class="text-3xl font-serif text-primary mb-10">Agenda Kegiatan</h2>
                    <div class="bg-white rounded-2xl overflow-hidden shadow-xl border-t-4 border-secondary">
                        <div class="divide-y divide-slate-100">
                            <div class="p-6 flex gap-4 hover:bg-slate-50 transition">
                                <div class="bg-primary text-white p-3 rounded-xl text-center min-w-[70px] h-fit">
                                    <span class="block text-xl font-bold">12</span>
                                    <span class="text-[10px] uppercase font-bold text-secondary">OKT</span>
                                </div>
                                <div>
                                    <h4 class="font-bold text-primary">Open House & Trial Class</h4>
                                    <p class="text-sm text-slate-500 flex items-center mt-1">
                                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        08.00 - Selesai
                                    </p>
                                </div>
                            </div>
                            <div class="p-6 flex gap-4 hover:bg-slate-50 transition">
                                <div class="bg-primary text-white p-3 rounded-xl text-center min-w-[70px] h-fit">
                                    <span class="block text-xl font-bold">25</span>
                                    <span class="text-[10px] uppercase font-bold text-secondary">OKT</span>
                                </div>
                                <div>
                                    <h4 class="font-bold text-primary">Wisuda Tahfidz Qur'an</h4>
                                    <p class="text-sm text-slate-500 flex items-center mt-1">
                                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        07.30 - 12.00
                                    </p>
                                </div>
                            </div>
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