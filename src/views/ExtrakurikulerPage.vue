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
            <img src="/foto/7.jpg" alt="Kyai" class="rounded-2xl shadow-xl relative z-10 border-4 border-white w-full">
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
            <h2 class="text-2xl md:text-4xl font-serif text-primary mb-6">Entrepreneurship</h2>
            <p class="text-slate-600 text-sm md:text-base mb-6 leading-relaxed">
              Yayasan Pendidikan Miftahul Falah mengusung konsep pendidikan yang unik dengan mengintegrasikan
              nilai-nilai spiritual dan kemandirian ekonomi melalui program Entrepreneurship. Kami meyakini bahwa santri
              masa kini tidak hanya harus unggul dalam ilmu agama, tetapi juga harus memiliki mentalitas tangguh dan
              keterampilan hidup yang nyata. Program ini dirancang sebagai bekal agar para santri mampu menjadi pribadi
              yang berdaya, inovatif, dan tidak bergantung pada orang lain setelah menyelesaikan masa pendidikannya.
              <br><br>

              Metode pembelajaran yang diterapkan oleh Yayasan Pendidikan Miftahul Falah tidak terbatas pada teori di
              dalam kelas, melainkan fokus pada praktik langsung di lapangan. Para santri diajarkan berbagai
              keterampilan wirausaha yang relevan dengan potensi alam dan kebutuhan pasar, mulai dari teknik berkebun
              dan bertani yang modern, tata cara beternak yang produktif, hingga kreativitas dalam membuat olahan
              kuliner. Melalui pengalaman langsung ini, santri belajar tentang proses, kerja keras, dan manajemen usaha
              secara riil sejak dini. <br><br>

              Tujuan utama dari kurikulum kewirausahaan di Yayasan Pendidikan Miftahul Falah adalah membentuk karakter
              entrepreneur yang jujur, amanah, dan memiliki spirit juang yang tinggi. Kami ingin mencetak generasi yang
              tidak hanya cerdas secara intelektual, tetapi juga cakap secara finansial dan mampu membuka lapangan
              pekerjaan bagi masyarakat luas. Dengan jiwa kemandirian yang tertanam kuat, lulusan kami diharapkan mampu
              menghadapi tantangan zaman dengan kepercayaan diri yang tinggi dan menjadi pilar penggerak ekonomi umat.
            </p>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
