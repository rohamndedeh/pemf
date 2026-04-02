<script setup lang="ts">
import $ from 'jquery'
import { onMounted } from 'vue';

onMounted(() => {
  $(document).ready(function () {
    $('.category-tab').on('click', function () {
      const filter = $(this).data('filter');

      // Update button state
      $('.category-tab').removeClass('active');
      $(this).addClass('active');

      // Filter logic
      if (filter === 'all') {
        $('.blog-item').fadeIn(400);
      } else {
        $('.blog-item').hide();
        $(`.blog-item.${filter}`).fadeIn(400);
      }
    });
  })
})

</script>

<template>
  <div>
    <header class="bg-primary py-16 md:py-24 relative overflow-hidden mt-16">
      <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]">
      </div>
      <div class="container mx-auto px-4 relative z-10 text-center">
        <h4 class="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4">Warta & Inspirasi</h4>
        <h1 class="text-4xl md:text-6xl font-serif text-white mb-6">Jendela Al-Hikmah</h1>
        <p class="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Kumpulan kabar berita, hikmah dari para asatidz, serta goresan pena kreatif dari para santri Al-Hikmah.
        </p>
      </div>
    </header>

    <!-- Blog Content -->
    <main class="container mx-auto px-4 py-12 md:py-20">
      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-16">
        <button
          class="category-tab active px-8 py-3 rounded-full border-2 border-primary/10 font-bold text-xs uppercase tracking-widest transition-all shadow-sm"
          data-filter="all">Semua Warta</button>
        <button
          class="category-tab px-8 py-3 rounded-full border-2 border-primary/10 font-bold text-xs uppercase tracking-widest transition-all shadow-sm"
          data-filter="berita">Berita & Kegiatan</button>
        <button
          class="category-tab px-8 py-3 rounded-full border-2 border-primary/10 font-bold text-xs uppercase tracking-widest transition-all shadow-sm"
          data-filter="kata-ust">Kata Ustadz</button>
        <button
          class="category-tab px-8 py-3 rounded-full border-2 border-primary/10 font-bold text-xs uppercase tracking-widest transition-all shadow-sm"
          data-filter="kolom-santri">Kolom Santri</button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12" id="blog-grid">

        <!-- Main Content Area -->
        <div class="lg:col-span-8 space-y-12">

          <!-- Blog Item: Berita (Featured) -->
          <article
            class="blog-item berita group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row transition-all hover:shadow-xl">
            <div class="md:w-2/5 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb280714553?auto=format&fit=crop&q=80&w=800"
                alt="Prestasi Santri" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
              <div
                class="absolute top-4 left-4 bg-secondary text-primary font-black text-[10px] px-3 py-1 rounded-full uppercase">
                Utama</div>
            </div>
            <div class="md:w-3/5 p-8 flex flex-col justify-center">
              <div
                class="flex items-center space-x-2 text-[10px] font-bold text-slate-400 mb-4 uppercase tracking-widest">
                <span>Berita & Kegiatan</span>
                <span>•</span>
                <span>15 Okt 2025</span>
              </div>
              <h2 class="text-2xl font-serif text-primary mb-4 group-hover:text-secondary transition leading-tight">
                Santri Al-Hikmah Sabet Juara Umum MTQ Nasional 2025</h2>
              <p class="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">Keberhasilan ini merupakan buah dari
                ketekunan santri dan bimbingan intensif dewan asatidz dalam program tahfidz...</p>
              <a href="#"
                class="text-primary font-bold text-xs flex items-center hover:translate-x-2 transition-transform">
                Baca Selengkapnya
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                  </path>
                </svg>
              </a>
            </div>
          </article>

          <!-- Blog Item: Kata Ust (Special Design) -->
          <article
            class="blog-item kata-ust bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden text-white shadow-2xl border-t-8 border-secondary">
            <div class="absolute top-0 right-0 p-8 opacity-5">
              <svg class="w-40 h-40" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3562 14 14.017 12.6608 14.017 11V8C14.017 6.34315 15.3562 5 17.017 5H20.017V11C20.017 12.6569 18.6739 14 17.017 14H16.017V16H19.017C20.1216 16 21.017 16.8954 21.017 18V21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8V14H6C4.34315 14 3 12.6608 3 11V8C3 6.34315 4.34315 5 6 5H9V11C9 12.6569 7.65685 14 6 14H5V16H8C9.10457 16 10 16.8954 10 18V21H3Z" />
              </svg>
            </div>
            <div class="relative z-10">
              <div class="flex items-center space-x-4 mb-8">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
                  class="w-14 h-14 rounded-full border-2 border-secondary object-cover shadow-lg">
                <div class="text-left">
                  <h4 class="text-secondary font-bold text-sm">Kata Ustadz</h4>
                  <p class="text-[10px] uppercase tracking-widest opacity-60">Ust. Dr. Salman Al-Faris</p>
                </div>
              </div>
              <h3 class="text-3xl font-serif text-white mb-6 leading-relaxed italic">"Pendidikan tanpa keteladanan
                bagaikan menanam benih di atas batu karang; ia mungkin tumbuh, tapi takkan mengakar."</h3>
              <p class="text-slate-300 text-sm mb-8 leading-relaxed">Refleksi mendalam tentang pentingnya integrasi adab
                dan ilmu dalam membentuk karakter santri di era digital yang penuh tantangan...</p>
              <button
                class="bg-white/10 hover:bg-secondary hover:text-primary border border-white/20 text-white px-8 py-3 rounded-full text-xs font-bold transition">Baca
                Tulisan Lengkap</button>
            </div>
          </article>

          <!-- Blog Item: Kolom Santri (Creative Design) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article
              class="blog-item kolom-santri bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition">
              <div class="bg-accent rounded-2xl p-6 mb-6 flex-grow border-l-4 border-secondary">
                <h4 class="text-[10px] font-bold text-secondary uppercase mb-4">Goresan Pena Santri</h4>
                <h3 class="text-xl font-serif text-primary mb-4 leading-snug">"Malam di Asrama: Sebuah Perjalanan Menuju
                  Langit"</h3>
                <p class="text-slate-500 text-xs italic leading-relaxed line-clamp-3">"Malam selalu punya cara untuk
                  bercerita. Di antara lantunan bait Alfiyah dan dinginnya ubin masjid, aku menemukan diriku..."</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div
                    class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                    AZ</div>
                  <span class="text-[10px] font-bold text-slate-700">Ahmad Zaki (Kelas 11)</span>
                </div>
                <span class="text-[9px] text-slate-400">10 Okt 2025</span>
              </div>
            </article>

            <article
              class="blog-item kolom-santri bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition">
              <div class="bg-accent rounded-2xl p-6 mb-6 flex-grow border-l-4 border-secondary">
                <h4 class="text-[10px] font-bold text-secondary uppercase mb-4">Goresan Pena Santri</h4>
                <h3 class="text-xl font-serif text-primary mb-4 leading-snug">"Teknologi dan Iman: Sinergi di Era
                  Metaverse"</h3>
                <p class="text-slate-500 text-xs italic leading-relaxed line-clamp-3">"Sebagai santri modern, kita tidak
                  boleh buta teknologi, namun jangan sampai teknologi membutakan iman kita dari..."</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div
                    class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                    FA</div>
                  <span class="text-[10px] font-bold text-slate-700">Fatimah Az-Zahra (Kelas 12)</span>
                </div>
                <span class="text-[9px] text-slate-400">08 Okt 2025</span>
              </div>
            </article>
          </div>

          <!-- Regular Berita Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article
              class="blog-item berita bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
              <img src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=600"
                class="w-full h-48 object-cover group-hover:scale-105 transition duration-500">
              <div class="p-6 text-left">
                <p class="text-[10px] font-bold text-slate-400 uppercase mb-2">Kegiatan</p>
                <h3 class="text-lg font-bold text-primary mb-4 leading-tight group-hover:text-secondary">Pelatihan
                  Leadership dan Manajemen Organisasi Santri</h3>
                <a href="#" class="text-primary text-[10px] font-bold border-b-2 border-secondary pb-1">Baca
                  Selengkapnya</a>
              </div>
            </article>
            <article
              class="blog-item berita bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600"
                class="w-full h-48 object-cover group-hover:scale-105 transition duration-500">
              <div class="p-6 text-left">
                <p class="text-[10px] font-bold text-slate-400 uppercase mb-2">Akademik</p>
                <h3 class="text-lg font-bold text-primary mb-4 leading-tight group-hover:text-secondary">Kunjungan
                  Edukatif ke Perpustakaan Nasional Indonesia</h3>
                <a href="#" class="text-primary text-[10px] font-bold border-b-2 border-secondary pb-1">Baca
                  Selengkapnya</a>
              </div>
            </article>
          </div>
        </div>

        <!-- Sidebar -->
        <aside class="lg:col-span-4 space-y-12">
          <!-- Search Box -->
          <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 class="text-primary font-bold mb-6 text-sm flex items-center">
              <svg class="w-4 h-4 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              Cari Artikel
            </h3>
            <div class="relative">
              <input type="text" placeholder="Masukkan kata kunci..."
                class="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-secondary transition">
            </div>
          </div>

          <!-- Recent Posts -->
          <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3
              class="text-primary font-bold mb-8 text-sm uppercase tracking-widest border-b-2 border-secondary inline-block pb-1">
              Warta Terbaru</h3>
            <div class="space-y-6">
              <a href="#" class="flex gap-4 group">
                <div class="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=150"
                    class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300">
                </div>
                <div class="text-left">
                  <h4
                    class="text-xs font-bold text-primary leading-tight group-hover:text-secondary transition line-clamp-2">
                    Agenda Tahunan: Wisuda Tahfidz Al-Qur'an Gelombang II</h4>
                  <p class="text-[10px] text-slate-400 mt-2">18 Okt 2025</p>
                </div>
              </a>
              <a href="#" class="flex gap-4 group">
                <div class="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e84?auto=format&fit=crop&q=80&w=150"
                    class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300">
                </div>
                <div class="text-left">
                  <h4
                    class="text-xs font-bold text-primary leading-tight group-hover:text-secondary transition line-clamp-2">
                    Muhadharah Akbar: Mengasah Skill Orasi dalam 3 Bahasa</h4>
                  <p class="text-[10px] text-slate-400 mt-2">20 Okt 2025</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Tags Cloud -->
          <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3
              class="text-primary font-bold mb-6 text-sm uppercase tracking-widest border-b-2 border-secondary inline-block pb-1">
              Tag Populer</h3>
            <div class="flex flex-wrap gap-2">
              <a href="#"
                class="bg-primary/5 text-primary px-3 py-1 rounded-lg text-[10px] font-bold hover:bg-secondary hover:text-primary transition">#Tahfidz</a>
              <a href="#"
                class="bg-primary/5 text-primary px-3 py-1 rounded-lg text-[10px] font-bold hover:bg-secondary hover:text-primary transition">#Prestasi</a>
              <a href="#"
                class="bg-primary/5 text-primary px-3 py-1 rounded-lg text-[10px] font-bold hover:bg-secondary hover:text-primary transition">#KitabKuning</a>
              <a href="#"
                class="bg-primary/5 text-primary px-3 py-1 rounded-lg text-[10px] font-bold hover:bg-secondary hover:text-primary transition">#Modern</a>
              <a href="#"
                class="bg-primary/5 text-primary px-3 py-1 rounded-lg text-[10px] font-bold hover:bg-secondary hover:text-primary transition">#Leadership</a>
            </div>
          </div>

          <!-- Banner CTA Sidebar -->
          <div class="bg-primary rounded-3xl p-8 text-center text-white relative overflow-hidden group">
            <div class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-10 transition duration-500"></div>
            <div class="relative z-10">
              <h4 class="text-secondary font-bold text-lg mb-4 font-serif">Bergabung Sekarang</h4>
              <p class="text-xs opacity-75 mb-6 leading-relaxed">Dapatkan pendidikan terbaik untuk masa depan yang lebih
                barakah.</p>
              <button class="bg-white text-primary font-bold px-8 py-3 rounded-full text-xs shadow-xl w-full">Daftar
                Santri Baru</button>
            </div>
          </div>
        </aside>

      </div>
    </main>
  </div>
</template>

<style scoped>
.category-tab.active {
  background-color: #d4af37;
  color: #064e3b;
  border-color: #d4af37;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
