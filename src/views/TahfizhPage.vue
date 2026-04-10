<script setup lang="ts">
import Header from '../components/Header.vue';
import { onMounted } from 'vue';

onMounted(() => {
  function openImage(url) {
    Swal.fire({
      imageUrl: url,
      imageAlt: 'Tampilan Pesantren',
      showConfirmButton: false,
      background: '#fdfbf0',
      padding: '0',
      width: '80%',
      showCloseButton: true,
      customClass: {
        image: 'rounded-xl'
      }
    });
  }
})

</script>

<template>
  <div>
    <Header />
    <section id="about" class="py-12 md:py-20 bg-accent">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <div class="w-full lg:w-1/2 relative">
            <img src="/foto/17.jpg" alt="Kyai" class="rounded-2xl shadow-xl relative z-10 border-4 border-white w-full">
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
            <h4 class="text-secondary font-bold tracking-widest uppercase text-xs mb-2">Program YPMF</h4>
            <h2 class="text-2xl md:text-4xl font-serif text-primary mb-6">Tahfizh Quran 30 Juz</h2>
            <p class="text-slate-600 text-sm md:text-base mb-6 leading-relaxed">
              Yayasan Pendidikan Miftahul Falah berkomitmen menghadirkan program Tahfizh Al-Qur'an yang berkualitas
              dengan alokasi waktu intensif lebih dari 5 jam setiap harinya. Kami memahami bahwa menghafal Al-Qur'an
              bukan sekadar menghafal teks, melainkan sebuah perjalanan spiritual yang memerlukan dedikasi tinggi. Oleh
              karena itu, kami menciptakan lingkungan belajar yang kondusif di area perbukitan Cianjur yang asri dan
              jauh dari hiruk-pikuk keramaian, sehingga para santri dapat fokus sepenuhnya dalam menjaga kedekatan
              mereka dengan Kalamullah. <br><br>

              Dalam pelaksanaannya, Yayasan Pendidikan Miftahul Falah menerapkan metode khusus yang telah teruji efektif
              dalam membantu santri mencapai target hafalan 30 juz. Kami tidak hanya menekankan pada kuantitas hafalan,
              tetapi juga sangat memperhatikan kualitas bacaan (tajwid) dan kekuatan hafalan (mutqin). Dengan bimbingan
              dari para Asatidz yang kompeten dan berpengalaman di bidang tahfizh, setiap santri diarahkan untuk
              memiliki pondasi hafalan yang kuat sebagai bekal utama mereka menjadi generasi Qur'ani di masa depan.
              <br><br>

              Lebih dari sekadar prestasi akademik, program tahfizh di Yayasan Pendidikan Miftahul Falah diintegrasikan
              dengan pembentukan karakter dan jiwa kemandirian. Kami percaya bahwa seorang penghafal Al-Qur'an harus
              memiliki kepribadian yang matang dan akhlakul karimah. Melalui program ini, para santri diharapkan tidak
              hanya mampu mengkhatamkan Al-Qur'an, tetapi juga mampu mengamalkan nilai-nilainya dalam kehidupan
              sehari-hari, serta siap menjadi pemimpin yang mandiri dan memiliki daya saing tinggi di tingkat nasional
              maupun internasional.
            </p>

          </div>
        </div>
      </div>
    </section>
    <section class="py-16 md:py-24 bg-white border-b border-slate-100">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <div class="text-primary font-arabic text-3xl md:text-5xl mb-8 leading-loose tracking-wide">
            خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
          </div>
          <p class="text-slate-600 italic text-sm md:text-base font-medium mb-4">"Sebaik-baik kalian adalah orang yang
            belajar Al-Qur'an dan mengajarkannya."</p>
          <span class="text-secondary font-bold text-xs uppercase tracking-widest">(HR. Bukhari)</span>
        </div>
      </div>
    </section>

    <!-- Statistik Section -->
    <section class="py-16 md:py-24 bg-accent/30">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Statistik Global</h2>
          <h3 class="text-3xl md:text-4xl font-serif text-primary">Perkembangan Penghafal Al-Qur'an</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div
            class="bg-white p-10 rounded-[2.5rem] shadow-sm border-b-4 border-secondary transition-transform hover:-translate-y-2">
            <h4 class="text-4xl font-bold text-primary mb-2">10 Juta+</h4>
            <p class="text-xs text-slate-500 font-bold uppercase tracking-widest">Penghafal Dunia</p>
            <p class="text-[10px] text-slate-400 mt-4 leading-relaxed italic">Estimasi kumulatif penghafal Al-Qur'an di
              seluruh benua.</p>
          </div>
          <div
            class="bg-white p-10 rounded-[2.5rem] shadow-sm border-b-4 border-primary transition-transform hover:-translate-y-2">
            <h4 class="text-4xl font-bold text-primary mb-2">30.000+</h4>
            <p class="text-xs text-slate-500 font-bold uppercase tracking-widest">Penghafal di Indonesia</p>
            <p class="text-[10px] text-slate-400 mt-4 leading-relaxed italic">Data santri tahfiz aktif di bawah naungan
              Kemenag & Pesantren.</p>
          </div>
          <div
            class="bg-white p-10 rounded-[2.5rem] shadow-sm border-b-4 border-secondary transition-transform hover:-translate-y-2">
            <h4 class="text-4xl font-bold text-primary mb-2">250+</h4>
            <p class="text-xs text-slate-500 font-bold uppercase tracking-widest">Lulusan Al-Hikmah</p>
            <p class="text-[10px] text-slate-400 mt-4 leading-relaxed italic">Santri kami yang telah menyelesaikan
              setoran 30 juz mutqin.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Metode Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2 text-left">
            <h2 class="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Metodologi Kami</h2>
            <h3 class="text-3xl md:text-4xl font-serif text-primary mb-8 leading-tight">Metode Tahfiz Al-Hikmah (Sabbaq,
              Sabqi, Manzil)</h3>
            <div class="space-y-8">
              <div class="flex gap-6">
                <div
                  class="w-12 h-12 bg-primary rounded-2xl flex-shrink-0 flex items-center justify-center text-secondary font-bold text-xl shadow-lg">
                  S</div>
                <div>
                  <h4 class="font-bold text-primary text-lg mb-2">Metode Sabbaq</h4>
                  <p class="text-slate-500 text-sm leading-relaxed">Setoran hafalan baru setiap hari sesuai target yang
                    ditentukan per-semester.</p>
                </div>
              </div>
              <div class="flex gap-6">
                <div
                  class="w-12 h-12 bg-primary rounded-2xl flex-shrink-0 flex items-center justify-center text-secondary font-bold text-xl shadow-lg">
                  M</div>
                <div>
                  <h4 class="font-bold text-primary text-lg mb-2">Murojaah (Manzil)</h4>
                  <p class="text-slate-500 text-sm leading-relaxed">Pengulangan hafalan lama secara berkala untuk
                    menjaga kualitas hafalan tetap mutqin.</p>
                </div>
              </div>
              <div class="flex gap-6">
                <div
                  class="w-12 h-12 bg-primary rounded-2xl flex-shrink-0 flex items-center justify-center text-secondary font-bold text-xl shadow-lg">
                  T</div>
                <div>
                  <h4 class="font-bold text-primary text-lg mb-2">Tahsin Bersanad</h4>
                  <p class="text-slate-500 text-sm leading-relaxed">Perbaikan bacaan makharijul huruf dan tajwid sebelum
                    memulai proses menghafal.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2">
            <div class="relative">
              <div class="absolute inset-0 bg-secondary/10 rounded-3xl transform rotate-3 translate-x-4 translate-y-4">
              </div>
              <img src="/foto/11.jpg" alt="Metode Tahfiz"
                class="relative z-10 rounded-3xl shadow-2xl w-full object-cover h-[500px]">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Step by Step Section -->
    <section class="py-16 md:py-24 bg-accent/20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Langkah Demi Langkah</h2>
        <h3 class="text-3xl md:text-4xl font-serif text-primary mb-16">Alur Menghafal di Pesantren</h3>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="step-card bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-all text-left">
            <div
              class="step-number w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-6 transition-all duration-300">
              01</div>
            <h4 class="font-bold text-primary mb-3">Persiapan Niat</h4>
            <p class="text-slate-500 text-xs leading-relaxed">Membersihkan hati dan memfokuskan niat semata-mata karena
              Allah SWT.</p>
          </div>
          <div class="step-card bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-all text-left">
            <div
              class="step-number w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-6 transition-all duration-300">
              02</div>
            <h4 class="font-bold text-primary mb-3">Ziyadah (Menambah)</h4>
            <p class="text-slate-500 text-xs leading-relaxed">Membaca ayat baru berulang kali hingga hafal di luar
              kepala (Sabbaq).</p>
          </div>
          <div class="step-card bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-all text-left">
            <div
              class="step-number w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-6 transition-all duration-300">
              03</div>
            <h4 class="font-bold text-primary mb-3">Sima'an (Menyimak)</h4>
            <p class="text-slate-500 text-xs leading-relaxed">Menyetorkan hafalan kepada ustadz pembimbing untuk
              divalidasi ketepatannya.</p>
          </div>
          <div class="step-card bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-all text-left">
            <div
              class="step-number w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-6 transition-all duration-300">
              04</div>
            <h4 class="font-bold text-primary mb-3">Murajaah Kuat</h4>
            <p class="text-slate-500 text-xs leading-relaxed">Mengulang-ulang hafalan secara mandiri maupun berjamaah
              setiap hari.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Motivasi Tokoh Section -->
    <section class="py-16 md:py-24 bg-yellow-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Motivasi Al-Qur'an</h2>
          <h3 class="text-3xl md:text-4xl font-serif text-primary">Inspirasi Para Asatidz</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="flex flex-col md:flex-row gap-8 bg-slate-50 p-8 rounded-[3rem] items-center text-left">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQPhIiS8RTh1zGO3qo9S9XsaQ8TANKkRvWoLfwlJS_XQUgW80885R56r97MUgGGPMxq9sQx1bVqPQshLkhBKdl5C3y3YeDEePtqPGUhTydTFRx07eZrE9SyTxKlBbdmstFPv9D4kk-RKY/s320-rw/images+%25281%2529.jpg"
              class="w-32 h-32 rounded-3xl object-cover border-4 border-white shadow-lg">
            <div>
              <p class="text-primary italic font-serif text-lg mb-4">"Penghafal Al-Qur'an adalah keluarga Allah di bumi.
                Jangan pernah berhenti sebelum titik terakhir."</p>
              <h4 class="font-bold text-primary">Ust. Adi Hidayat, Lc., M.A.</h4>
              <p class="text-[10px] text-secondary font-bold uppercase tracking-widest">Ulama & Da'i Indonesia</p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row gap-8 bg-slate-50 p-8 rounded-[3rem] items-center text-left">
            <img src="https://proumedia.co.id/wp-content/uploads/2022/04/7-UAS.jpg"
              class="w-32 h-32 rounded-3xl object-cover border-4 border-white shadow-lg">
            <div>
              <p class="text-primary italic font-serif text-lg mb-4">"Al-Qur'an akan menjadi syafaat di hari kiamat.
                Jadikan ia teman karibmu di dunia."</p>
              <h4 class="font-bold text-primary">Ust. Abdul Somad, Lc., D.E.S.A., Ph.D.</h4>
              <p class="text-[10px] text-secondary font-bold uppercase tracking-widest">Ulama & Da'i Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Foto Kegiatan Section (Swiper) -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 reveal">
          <h2 class="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Galeri Kegiatan</h2>
          <h3 class="text-3xl md:text-4xl font-serif text-primary">Dokumentasi Kegiatan</h3>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="reveal cursor-pointer overflow-hidden rounded-2xl h-48 md:h-64"
            onclick="openImage('https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=1000')">
            <img src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=600"
              class="w-full h-full object-cover hover:scale-110 transition duration-700">
          </div>
          <div class="reveal cursor-pointer overflow-hidden rounded-2xl h-48 md:h-64" style="transition-delay: 0.1s;"
            onclick="openImage('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000')">
            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600"
              class="w-full h-full object-cover hover:scale-110 transition duration-700">
          </div>
          <div class="reveal cursor-pointer overflow-hidden rounded-2xl h-48 md:h-64" style="transition-delay: 0.2s;"
            onclick="openImage('https://images.unsplash.com/photo-1555854817-40e098ee7f5d?auto=format&fit=crop&q=80&w=1000')">
            <img src="https://images.unsplash.com/photo-1555854817-40e098ee7f5d?auto=format&fit=crop&q=80&w=600"
              class="w-full h-full object-cover hover:scale-110 transition duration-700">
          </div>
          <div class="reveal cursor-pointer overflow-hidden rounded-2xl h-48 md:h-64" style="transition-delay: 0.3s;"
            onclick="openImage('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000')">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600"
              class="w-full h-full object-cover hover:scale-110 transition duration-700">
          </div>
          <div class="reveal cursor-pointer overflow-hidden rounded-2xl h-48 md:h-64 col-span-2"
            style="transition-delay: 0.4s;"
            onclick="openImage('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000')">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
              class="w-full h-full object-cover hover:scale-110 transition duration-700">
          </div>
          <div class="reveal cursor-pointer overflow-hidden rounded-2xl h-48 md:h-64 col-span-2"
            style="transition-delay: 0.5s;"
            onclick="openImage('https://images.unsplash.com/photo-1577891742242-d7c802217514?auto=format&fit=crop&q=80&w=1000')">
            <img src="https://images.unsplash.com/photo-1577891742242-d7c802217514?auto=format&fit=crop&q=80&w=1000"
              class="w-full h-full object-cover hover:scale-110 transition duration-700">
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped></style>
