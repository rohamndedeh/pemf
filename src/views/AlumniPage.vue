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
            <h4 class="text-secondary font-bold tracking-widest uppercase text-xs mb-2">Detail YPMF</h4>
            <h2 class="text-2xl md:text-4xl font-serif text-primary mb-6">Alumni</h2>
            <p class="text-slate-600 text-sm md:text-base mb-6 leading-relaxed">
              Alumni pesantren bukan sekadar mereka yang telah menyelesaikan masa studi di lembaga pendidikan Islam,
              melainkan pribadi yang telah ditempa dengan nilai-nilai kemandirian, akhlak, dan kedalaman spiritual.
              Menjadi alumni berarti menyandang tanggung jawab moral untuk menjaga warisan ilmu yang telah didapat
              selama nyantri. Sebagaimana yang ditekankan di Pesantren Entrepreneur Miftahul Falah, seorang alumni
              adalah representasi dari generasi Qur’ani yang tidak hanya cerdas secara kognitif, tetapi juga memiliki
              ketangguhan jiwa untuk menghadapi tantangan zaman dengan prinsip-prinsip syariat yang kokoh. <br><br>

              Hubungan antara alumni dan pondok pesantren tidak berhenti saat ijazah diberikan, melainkan terus terjaga
              melalui jalinan silaturahmi yang erat. Silaturahmi ini menjadi wadah untuk saling menguatkan, bertukar
              pikiran, dan menjaga sanad keilmuan agar tidak terputus. Melalui ikatan ini, para alumni tetap memiliki
              kompas moral yang jelas, memastikan bahwa di mana pun mereka berada, nilai-nilai kepesantrenan tetap
              menjadi landasan dalam bersikap. Rasa persaudaraan yang dibangun di asrama bertransformasi menjadi
              jaringan sosial yang kuat dan saling mendukung dalam kebaikan. <br><br>


            </p>

          </div>
        </div>
      </div>
    </section>
    <section class="py-20 bg-accent/30">
      <div class="container mx-auto px-4 text-center">
        <div class="mb-16 reveal">
          <h2 class="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Motivasi</h2>
          <h3 class="text-3xl md:text-4xl font-serif text-primary">Alumni YPMF</h3>

        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Person 1 -->
          <div class="reveal">
            <div class="group relative overflow-hidden rounded-2xl mb-6 shadow-xl">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
                alt="Pimpinan"
                class="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition duration-700">
              <div
                class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-90 transition duration-500">
              </div>
              <div
                class="absolute bottom-6 left-0 right-0 p-4 text-white translate-y-8 group-hover:translate-y-0 transition duration-500">
                <p class="text-xs uppercase font-bold text-secondary mb-2">Pimpinan Pesantren</p>
                <h4 class="text-lg font-serif"> Muhammad Naim, S.Mn.</h4>
              </div>
            </div>
            <p class="text-sm p-3 italic">"Alhamdulillah selama di pesantren saya menyelesaikan Al-Qur'an 30 juz, kitab
              Hadits
              Arba'in & bahasa
              Arab serta ilmu syari'ah lainnya. Pendidikan karakter, organisasi & kemandirian pun menjadi pondasi kuat.
              Semua itu merupakan bekal & berkah bagi saya menjadi pribadi yang bermanfaat bagi umat sampai saat ini."
            </p>
          </div>
          <!-- Person 2 -->
          <div class="reveal" style="transition-delay: 0.1s;">
            <div class="group relative overflow-hidden rounded-2xl mb-6 shadow-xl">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
                alt="Pimpinan"
                class="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition duration-700">
              <div
                class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-90 transition duration-500">
              </div>
              <div
                class="absolute bottom-6 left-0 right-0 p-4 text-white translate-y-8 group-hover:translate-y-0 transition duration-500">
                <p class="text-xs uppercase font-bold text-secondary mb-2">Direktur Pendidikan</p>
                <h4 class="text-lg font-serif">Ust. Dr. Salman Al-Faris</h4>
              </div>
            </div>
            <p class="text-sm p-3 italic">"Pesantren kami sangat cocok dan tepat bagi teman-teman yang ingin menghafal
              Al-Qur'an, karena tempat yang nyaman dan asri, guru yang berpengalaman dan berkompeten dalam bidang
              tahfizh, serta metode yang digunakan juga sama seperti salah satu Syaikh dari markaz menghafal Qur'an di
              Madinah, Saudi Arabia."
            </p>

          </div>
          <!-- Person 3 -->
          <div class="reveal" style="transition-delay: 0.2s;">
            <div class="group relative overflow-hidden rounded-2xl mb-6 shadow-xl">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
                alt="Pimpinan"
                class="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition duration-700">
              <div
                class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-90 transition duration-500">
              </div>
              <div
                class="absolute bottom-6 left-0 right-0 p-4 text-white translate-y-8 group-hover:translate-y-0 transition duration-500">
                <p class="text-xs uppercase font-bold text-secondary mb-2">Sekretaris Jenderal</p>
                <h4 class="text-lg font-serif">Ust. Hamdan Ma'ruf</h4>
              </div>
            </div>
            <p class="text-sm p-3 italic">"Pesantren Entrepreneur Miftahul Falah tempat yang selalu terkenang manis.
              Bimbingan dari para Asatidz yang luar biasa serta didukung dengan lingkungan yang sangat bagus, serta
              program-program pendidikan yang sangat baik untuk mempelajari ilmu diniyah dan tahfizh Qur'an, dan juga
              program yang sangat bermanfaat untuk kehidupan ke depan."
            </p>

          </div>
          <!-- Person 4 -->
          <div class="reveal" style="transition-delay: 0.3s;">
            <div class="group relative overflow-hidden rounded-2xl mb-6 shadow-xl">
              <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400"
                alt="Pimpinan"
                class="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition duration-700">
              <div
                class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-90 transition duration-500">
              </div>
              <div
                class="absolute bottom-6 left-0 right-0 p-4 text-white translate-y-8 group-hover:translate-y-0 transition duration-500">
                <p class="text-xs uppercase font-bold text-secondary mb-2">Bendahara Umum</p>
                <h4 class="text-lg font-serif">Ust. Syarifuddin</h4>
              </div>

            </div>
            <p class="text-sm p-3 italic border-b-2 ">"Saya sebelumnya merasa kesusahan dalam menghafal Al-Qur'an karena
              tidak tahu
              cara menjaga hafalan tersebut. Setelah saya di sini, atas izin Allah hafalan saya selesai 30 Juz."
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
