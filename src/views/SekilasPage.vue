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
              YPMF didirikan dengan tujuan untuk berpartisipasi dalam pembentukan manusia Indonesia yang unggul dalam
              ilmu yang bermanfaat kepada masyarakat, bertaqwa kepada Allah S.W.T. serta berkepribadian mandiri.
              <br><br>
              Pendirian YPMF telah dibakukan dihadapan Notaris H.Asmawel Amin S.H. dengan Akta No.75 tanggal 22 Maret
              1999 dan didaftarkan di Pengadilan Negeri Jakarta Pusat pada tanggal 25 Mei 1999 dibawah No.96.1999.
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

    <section class="py-20 bg-accent/30">
      <div class="container mx-auto px-4 text-center">
        <div class="mb-16 reveal">
          <h2 class="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Cita-cita Kami</h2>
          <h3 class="text-3xl md:text-4xl font-serif text-primary">Pendidikan dan Pembiayaan</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div class="bg-green-100 border border-white/10 p-10 rounded-3xl backdrop-blur-md">
            <h3 class="text-2xl font-bold text-primary mb-4">Pengajian Anak SD & SMP</h3>
            <p>
              Pengajian bagi anak-anak usia SD dan SLTP dari daerah sekitar Desa Sukamahi, Kec Sukaresmi, yang telah
              terlaksana sejak Oktober 1999.
            </p>
          </div>
          <div class="bg-green-100 border border-white/10 p-10 rounded-3xl backdrop-blur-md">
            <h3 class="text-2xl font-bold text-primary mb-4">Pengajian dan Pelatihan</h3>
            <p>
              Pengajian dan peningkatan keterampilan dalam bentuk ceramah dan pelatihan bagi masyarakat sekitar Desa
              Sukamahi, Kec Sukaresmi, untuk menunjang kemampuan daerah tersebut.
            </p>

          </div>
          <div class="bg-green-100 border border-white/10 p-10 rounded-3xl backdrop-blur-md">
            <h3 class="text-2xl font-bold text-primary mb-4">Pendidikan Santri</h3>
            <p>Pendidikan Santri, bagi putra-putra Indonesia Muslim terpilih, yang akan dididik agar berkemampuan
              sebagai Dai' sekaligus sebagai penyuluh Agro (Pertanian dan Perikanan) yang mampu berdiri sendiri.</p>

          </div>
          <div class="bg-green-100 border border-white/10 p-10 rounded-3xl backdrop-blur-md">
            <h3 class="text-2xl font-bold text-primary mb-4">Wisata Rohani</h3>
            <p>
              Wisata Rohani, yang menyediakan fasilitas peristirahatan sekaligus pendamping / pembimbing kerohanian bagi
              para tenaga-tenaga Eksekutif / Profesional yang ingin memperdalam pengetahuan agama disela-sela
              kesibukannya sehari-hari.
            </p>

          </div>

        </div>
      </div>
    </section>

    <section class="py-20 bg-primary pattern-bg relative overflow-hidden text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 reveal">
          <h2 class="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Arah & Tujuan</h2>
          <h3 class="text-3xl md:text-4xl font-serif">Visi & Misi</h3>
          <div class="w-20 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <p class="text-lg font-serif italic leading-relaxed">"Menjadi suatu Lembaga Pendidikan yang dapat mencetak
              Sumber Daya Manusia yang unggul dalam ilmu, bertaqwa dan mandiri."
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
            <p>
              Melaksanakan kegiatan pendidikan umat yang Islami, terutama bagi putra dan putri Indonesia, dengan tujuan:
            </p>
            <ul class="text-xs space-y-4 text-slate-300">
              <li class="flex items-start"><span class="text-secondary mr-2">•</span> Menjadi Lembaga Pendidikan yang
                sehat kuat mandiri dan handal.</li>
              <li class="flex items-start"><span class="text-secondary mr-2">•</span> Membangun Nusa dan Bangsa sesuai
                Sunnatullah.</li>
            </ul>
          </div>

          <!-- Moto Card -->

        </div>
      </div>
    </section>

    <!-- Struktur Organisasi Section -->
    <section class="py-20 bg-accent/30">
      <div class="container mx-auto px-4 text-center">
        <div class="mb-16 reveal">
          <h2 class="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Struktur Kepemimpinan</h2>
          <h3 class="text-3xl md:text-4xl font-serif text-primary">Dewan Pengawas, Pembina & Pengelola</h3>
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          <div class="bg-green-100 border border-white/10 p-10 rounded-3xl backdrop-blur-md">
            <h3 class="text-2xl font-bold text-primary mb-4">Dewan Pengawas</h3>
            <ul>
              <li>
                Bpk. Rizky Budinanda
              </li>
              <li>
                Bpk. H. Bagus Hernowo
              </li>
              <li>
                ⁠Bpk. H. Robbyantono
              </li>
            </ul>
          </div>
          <div class="bg-green-100 border border-white/10 p-10 rounded-3xl backdrop-blur-md">
            <h3 class="text-2xl font-bold text-primary mb-4">Dewan Pembina</h3>
            <ul>
              <li>
                Bpk. H. Syahabudin AR
              </li>
              <li>
                Bpk. Syaiful
              </li>

            </ul>
          </div>
          <div class="bg-green-100 border border-white/10 p-10 rounded-3xl backdrop-blur-md">
            <h3 class="text-2xl font-bold text-primary mb-4">Dewan Pengelola</h3>
            <ul>
              <li>
                Ketua :
                A. Setiawan

              </li>
              <li>
                Sekretaris:
                Khairulhuda

              </li>
              <li>
                Bendahara:
                H. Sayuti
              </li>

            </ul>


          </div>


        </div>
      </div>
    </section>


  </div>
</template>

<style scoped></style>
