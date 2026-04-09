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
              Pesantren Entrepreneur Miftahul Falah adalah lembaga pesantren yang tidak hanya fokus pada pendidikan
              berbasis agama saja, tapi juga berfokus pada pengembangan diri para santri dalam hal kepribadian, akhlaq
              dan juga jiwa kemandirian para santri. <br><br>
              Pesantren Entrepreneur Miftahul Falah terletak di area perbukitan Cianjur, di lingkungan yang memiliki
              udara yang masih segar dan jauh dari keramaian sehingga kondisi yang demikian sangat mendukung bagi proses
              belajar dan pengembangan diri anak. <br><br>
              Selain itu metoda pembelajaran yang diberikan sangat bervariatif, tidak hanya berbasis kelas saja tetapi
              juga berbasis praktik lapangan. Para santri tidak hanya dibekali pengetahuan agama saja, tapi juga
              pengembangan diri, kepemimpinan, dan juga kemandirian berupa kewirausahaan dan keterampilan lainnya.
              Dengan demikian nantinya para alumnus pesantren memiliki kepribadian dan pengetahuan yang matang, sehingga
              lulusan pesantren mempunyai daya bersaing yang tinggi. <br><br>
              Dan Alhamdulillah para alumnus Pesantren Entrepreneur Miftahul Falah sudah banyak yang diterima di tingkat
              perguruan tinggi baik di dalam maupun luar negeri, bahkan diantaranya mendapatkan beasiswa.
            </p>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
