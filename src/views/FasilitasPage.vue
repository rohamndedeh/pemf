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
            <img src="/foto/18.jpg" alt="Kyai" class="rounded-2xl shadow-xl relative z-10 border-4 border-white w-full">
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
            <h4 class="text-secondary font-bold tracking-widest uppercase text-xs mb-2">Program Kami</h4>
            <h2 class="text-2xl md:text-4xl font-serif text-primary mb-6">Bahasa Arab</h2>
            <p class="text-slate-600 text-sm md:text-base mb-6 leading-relaxed">
              Yayasan Pendidikan Miftahul Falah menempatkan Bahasa Arab sebagai pilar komunikasi utama yang wajib
              dikuasai oleh seluruh santri. Kami menyadari bahwa Bahasa Arab adalah kunci untuk mendalami literatur
              Islam klasik dan memahami Al-Qur'an secara mendalam. Oleh karena itu, bahasa ini diajarkan melalui
              kurikulum khusus yang dirancang secara sistematis, mulai dari pemahaman tata bahasa dasar hingga kemampuan
              berkomunikasi aktif, sehingga santri memiliki landasan yang kokoh dalam studi agama mereka. <br><br>

              Pembelajaran di Yayasan Pendidikan Miftahul Falah menggunakan metode yang interaktif dan aplikatif, di
              mana Bahasa Arab diposisikan sebagai "ilmu alat" untuk menunjang program Tahfizh Al-Qur'an dan penguasaan
              Hadits. Dengan menguasai kaidah bahasa yang tepat, para santri akan lebih mudah dalam memahami makna
              setiap ayat yang mereka hafal. Proses belajar ini didukung oleh lingkungan pendidikan yang suportif, di
              mana para santri didorong untuk mempraktikkan kosakata baru dalam interaksi harian di lingkungan
              pesantren. <br><br>

              Melalui program Bahasa Arab ini, Yayasan Pendidikan Miftahul Falah bertujuan mencetak lulusan yang
              memiliki kompetensi bahasa bertaraf internasional. Hal ini terbukti dari banyaknya alumni kami yang
              berhasil melanjutkan studi ke berbagai perguruan tinggi bergengsi, baik di dalam negeri maupun di Timur
              Tengah seperti Universitas Islam Madinah dan LIPIA Jakarta. Kami percaya bahwa penguasaan Bahasa Arab yang
              baik akan membuka pintu cakrawala ilmu pengetahuan yang lebih luas dan meningkatkan daya saing santri di
              kancah global.
            </p>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
