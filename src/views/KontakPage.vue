<script setup lang="ts">
import Header from '../components/Header.vue';



</script>

<template>
  <div>
    <Header />
    <main class="container mx-auto px-4 py-16 md:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <!-- Info & Map Column -->
        <div class="lg:col-span-7 space-y-8">
          <div>
            <h2 class="text-secondary font-bold text-xs uppercase tracking-widest mb-4">Informasi Kontak</h2>
            <h3 class="text-3xl font-serif text-primary mb-8">Kunjungi Kami</h3>
          </div>

          <!-- Contact Cards -->
          <div class=" grid grid-cols-1 md:grid-cols-2 gap-2">
            <div
              class="contact-card bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm  hover:border-secondary transition-colors">
              <div class="bg-primary/5 p-3 rounded-xl text-primary">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div class="text-left">
                <h4 class="font-bold text-primary text-sm">Alamat Lengkap</h4>
                <p class="text-slate-500 text-xs mt-1 leading-relaxed">Cibadak, Sukamahi, Sukaresmi, Cianjur, Jawa Barat
                </p>
              </div>
            </div>

            <a href="https://wa.me/628123456789"
              class="contact-card bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm block hover:border-secondary transition-colors">
              <div class="bg-primary/5 p-3 rounded-xl text-primary">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.139c1.52.907 3.21 1.385 4.942 1.386 5.4 0 9.794-4.394 9.797-9.795.001-2.617-1.019-5.077-2.87-6.928-1.851-1.851-4.311-2.871-6.928-2.872-5.401 0-9.795 4.394-9.798 9.795-.001 2.1.547 4.146 1.588 5.95l-.1.365-1.112 4.055 4.146-1.086.335.2z" />
                </svg>
              </div>
              <div class="text-left">
                <h4 class="font-bold text-primary text-sm">WhatsApp</h4>
                <p class="text-slate-500 text-xs mt-1">081546483008 (Ustadz Susanto)</p>
                <span class="text-[10px] text-secondary font-bold mt-2 inline-block">Klik untuk Chat &rarr;</span>
              </div>
            </a>
            <a href="https://wa.me/628123456789"
              class="contact-card bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm block hover:border-secondary transition-colors">
              <div class="bg-primary/5 p-3 rounded-xl text-primary">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.139c1.52.907 3.21 1.385 4.942 1.386 5.4 0 9.794-4.394 9.797-9.795.001-2.617-1.019-5.077-2.87-6.928-1.851-1.851-4.311-2.871-6.928-2.872-5.401 0-9.795 4.394-9.798 9.795-.001 2.1.547 4.146 1.588 5.95l-.1.365-1.112 4.055 4.146-1.086.335.2z" />
                </svg>
              </div>
              <div class="text-left">
                <h4 class="font-bold text-primary text-sm">WhatsApp</h4>
                <p class="text-slate-500 text-xs mt-1">088809762930 (Ustadz Dedeng Wiraha)</p>
                <span class="text-[10px] text-secondary font-bold mt-2 inline-block">Klik untuk Chat &rarr;</span>
              </div>
            </a>

            <div
              class="contact-card bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm  hover:border-secondary transition-colors">
              <div class="bg-primary/5 p-3 rounded-xl text-primary">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                  </path>
                </svg>
              </div>
              <div class="text-left">
                <h4 class="font-bold text-primary text-sm">Email Resmi</h4>
                <p class="text-slate-500 text-xs mt-1">info@alhikmah.sch.id</p>
              </div>
            </div>
          </div>

          <!-- Google Map -->
          <div class="rounded-3xl overflow-hidden shadow-xl h-64 border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.2281897096!2d106.789155!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNSJTIDEwNsKwNDcnMjEuMCJF!5e0!3m2!1sid!2sid!4v1634567891234!5m2!1sid!2sid"
              width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>

        <!-- Guest Book Form Column -->
        <div class="lg:col-span-5">
          <div
            class="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100px]"></div>

            <div class="mb-10 text-left">
              <h2 class="text-primary font-serif text-3xl mb-3">Buku Tamu Digital</h2>
              <p class="text-slate-400 text-sm">Sampaikan pesan, saran, atau pertanyaan Anda melalui formulir di bawah
                ini.</p>
            </div>

            <form id="guestBookForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name"
                    class="block text-[10px] font-bold text-primary uppercase tracking-widest mb-2 ml-1">Nama
                    Lengkap</label>
                  <input type="text" id="name" name="name" required
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all"
                    placeholder="Masukkan nama Anda">
                </div>
                <div>
                  <label for="phone"
                    class="block text-[10px] font-bold text-primary uppercase tracking-widest mb-2 ml-1">Nomor
                    Telepon/WA</label>
                  <input type="tel" id="phone" name="phone" required
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all"
                    placeholder="Contoh: 08123456789">
                </div>
              </div>

              <div>
                <label for="email"
                  class="block text-[10px] font-bold text-primary uppercase tracking-widest mb-2 ml-1">Alamat
                  Email</label>
                <input type="email" id="email" name="email" required
                  class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all"
                  placeholder="nama@email.com">
              </div>

              <div>
                <label for="subject"
                  class="block text-[10px] font-bold text-primary uppercase tracking-widest mb-2 ml-1">Perihal</label>
                <select id="subject" name="subject"
                  class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all">
                  <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                  <option value="Info Pendaftaran">Info Pendaftaran</option>
                  <option value="Kunjungan">Permohonan Kunjungan</option>
                  <option value="Saran & Kritik">Saran & Kritik</option>
                </select>
              </div>

              <div>
                <label for="message"
                  class="block text-[10px] font-bold text-primary uppercase tracking-widest mb-2 ml-1">Pesan
                  Anda</label>
                <textarea id="message" name="message" rows="5" required
                  class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all resize-none"
                  placeholder="Tuliskan pesan atau pertanyaan detail Anda di sini..."></textarea>
              </div>

              <button type="submit"
                class="w-full bg-primary text-secondary font-bold py-5 rounded-2xl shadow-xl hover:bg-emerald-900 transition-all active:scale-[0.98] uppercase tracking-widest text-xs">
                Kirim Pesan Sekarang
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
