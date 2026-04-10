<script setup lang="ts">
import Header from '../components/Header.vue';



</script>

<template>
  <div>
    <Header />
    <section id="about" class="py-12 md:py-20 bg-accent">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <div class="w-full lg:w-1/2 relative">
            <img src="/foto/1.jpg" alt="Kyai" class="rounded-2xl shadow-xl relative z-10 border-4 border-white w-full">
            <div
              class="hidden md:block absolute -bottom-6 -right-6 bg-primary p-6 rounded-xl shadow-xl z-20 text-white border-b-4 border-secondary max-w-xs">
              <p class="text-secondary font-serif italic text-lg">"Ilmu tanpa adab seperti api tanpa kayu bakar."</p>
            </div>
            <!-- Mobile Quote -->
            <div class="md:hidden mt-4 text-center">
              <p class="text-primary font-serif italic italic font-bold">"Ilmu tanpa adab seperti api tanpa kayu bakar."
              </p>
              <p class="text-xs text-slate-500 mt-1">— KH. Ahmad Husein, M.Pd.I</p>
            </div>
          </div>
          <div class="w-full lg:w-1/2">

            <h4 class="text-secondary font-bold tracking-widest uppercase text-xs mb-2">Tentang Kami</h4>
            <h2 class="text-2xl md:text-4xl font-serif text-primary mb-6">Sejarah & Filosofi Al-Hikmah</h2>
            <p class="text-slate-600 text-sm md:text-base mb-6 leading-relaxed">
              Yayasan Pendidikan
              Miftahul Falah adalah lembaga pesantren yang tidak hanya fokus pada pendidikan
              berbasis agama saja, tapi juga berfokus pada pengembangan diri para santri dalam hal kepribadian, akhlaq
              dan juga jiwa kemandirian para santri. <br><br>
              Yayasan Pendidikan
              Miftahul Falah terletak di area perbukitan Cianjur, di lingkungan yang memiliki
              udara yang masih segar dan jauh dari keramaian sehingga kondisi yang demikian sangat mendukung bagi proses
              belajar dan pengembangan diri anak. <br><br>
              Selain itu metoda pembelajaran yang diberikan sangat bervariatif, tidak hanya berbasis kelas saja tetapi
              juga berbasis praktik lapangan. Para santri tidak hanya dibekali pengetahuan agama saja, tapi juga
              pengembangan diri, kepemimpinan, dan juga kemandirian berupa kewirausahaan dan keterampilan lainnya.
              Dengan demikian nantinya para alumnus pesantren memiliki kepribadian dan pengetahuan yang matang, sehingga
              lulusan pesantren mempunyai daya bersaing yang tinggi. <br><br>
              Dan Alhamdulillah para alumnus Yayasan Pendidikan
              Miftahul Falah sudah banyak yang diterima di tingkat
              perguruan tinggi baik di dalam maupun luar negeri, bahkan diantaranya mendapatkan beasiswa.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-xl border-l-4 border-secondary shadow-sm">
                <h3 class="text-xl font-bold text-primary">1.200+</h3>
                <p class="text-[10px] text-slate-500 uppercase">Santri Aktif</p>
              </div>
              <div class="bg-white p-4 rounded-xl border-l-4 border-secondary shadow-sm">
                <h3 class="text-xl font-bold text-primary">85+</h3>
                <p class="text-[10px] text-slate-500 uppercase">Asatidzah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-primary pattern-bg relative overflow-hidden text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 reveal">
          <h2 class="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Arah & Tujuan</h2>
          <h3 class="text-3xl md:text-4xl font-serif">Visi, Misi & Moto</h3>
          <div class="w-20 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Visi Card -->
          <div class="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md reveal">
            <div class="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary mb-8 shadow-lg">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <h4 class="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Visi Kami</h4>
            <p class="text-lg font-serif italic leading-relaxed">"Menjadi lembaga tarbiyah yang mampu menyiapkan
              generasi Qur'ani yang berjiwa mandiri."
            </p>
          </div>

          <!-- Misi Card -->
          <div class="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md reveal">
            <div class="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary mb-8 shadow-lg">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <h4 class="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Misi Kami</h4>
            <ul class="text-xs space-y-4 text-slate-300">
              <li class="flex items-start"><span class="text-secondary mr-2">•</span> Menyelenggarakan pendidikan
                tahfidz dan kajian kitab secara mendalam.</li>
              <li class="flex items-start"><span class="text-secondary mr-2">•</span> Mengintegrasikan kurikulum
                nasional dengan wawasan global.</li>
              <li class="flex items-start"><span class="text-secondary mr-2">•</span> Mengembangkan potensi santri
                melalui program kepemimpinan dan kewirausahaan.</li>
            </ul>
          </div>

          <!-- Moto Card -->
          <div class="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md reveal">
            <div class="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary mb-8 shadow-lg">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <h4 class="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Moto Perjuangan</h4>
            <div class="text-center py-6">
              <h5 class="text-2xl font-serif text-secondary mb-2 uppercase tracking-widest">Al-Khidmah</h5>
              <p class="text-[10px] text-white/60 tracking-widest uppercase">Berkhidmat, Berilmu, Beradab</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Struktur Organisasi Section -->
    <section class="py-20 bg-accent/30">
      <div class="container mx-auto px-4 text-center">
        <div class="mb-16 reveal">
          <h2 class="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Struktur Kepemimpinan</h2>
          <h3 class="text-3xl md:text-4xl font-serif text-primary">Dewan Pengasuh & Pimpinan</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div class="group">
            <div class="relative mb-6">
              <div class="absolute inset-0 bg-secondary rounded-2xl transform rotate-3 group-hover:rotate-6 transition">
              </div>
              <img src="/foto/14.png" alt="Ustadz"
                class="relative z-10 w-full h-72 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition duration-500">
            </div>

          </div>
          <div class="group">
            <div class="relative mb-6">
              <div class="absolute inset-0 bg-secondary rounded-2xl transform rotate-3 group-hover:rotate-6 transition">
              </div>
              <img src="/foto/15.png" alt="Ustadz"
                class="relative z-10 w-full h-72 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition duration-500">
            </div>

          </div>
          <div class="group">
            <div class="relative mb-6">
              <div class="absolute inset-0 bg-secondary rounded-2xl transform rotate-3 group-hover:rotate-6 transition">
              </div>
              <img src="/foto/16.png" alt="Ustadz"
                class="relative z-10 w-full h-72 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition duration-500">
            </div>

          </div>

        </div>
      </div>
    </section>


  </div>
</template>

<style scoped></style>
