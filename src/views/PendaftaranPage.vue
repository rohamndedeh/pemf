<script setup lang="ts">
import Header from '../components/Header.vue';
import { onMounted } from 'vue';

import { ref } from 'vue'
import { supabase } from '../utils/supabase'
import { useRouter } from 'vue-router'

const name = ref('')
const nik = ref('')
const tempat_lhr = ref('')
const tgl_lhr = ref('')
const nama_ayah = ref('')
const nama_ibu = ref('')
const hp = ref('')
const alamat = ref('')
const jk = ref('')
const file = ref(null)
const kk = ref(null)
const loading = ref(false)

function handleFoto(e) {
  file.value = e.target.files[0]
}

function handleKK(e) {
  kk.value = e.target.files[0]
}

async function handleSubmit() {
  try {
    loading.value = true

    let fotoUrl = null
    let kkUrl = null

    // 1. Upload gambar (kalau ada)
    if (file.value) {
      const fileName = Date.now() + '-' + file.value.name

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(fileName, file.value)

      if (uploadError) throw uploadError

      // ambil URL
      const { data } = supabase.storage
        .from('images')
        .getPublicUrl(fileName)

      fotoUrl = data.publicUrl
    }

    if (kk.value) {
      const fileNmae = Date.now() + '-' + kk.value.name

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(fileNmae, kk.value)

      if (uploadError) throw uploadError

      // ambil URL
      const { data } = supabase.storage
        .from('images')
        .getPublicUrl(fileNmae)

      kkUrl = data.publicUrl
    }

    // 2. Insert ke database
    const { error: insertError } = await supabase
      .from('santri')
      .insert([
        {
          name: name.value,
          nik: nik.value,
          tempat_lhr: tempat_lhr.value,
          tgl_lhr: tgl_lhr.value,
          jk: jk.value,
          nama_ayah: nama_ayah.value,
          nama_ibu: nama_ibu.value,
          hp: hp.value,
          alamat: alamat.value,
          kk: kkUrl,
          foto: fotoUrl
        }
      ])

    if (insertError) throw insertError

    alert('Berhasil simpan 🎉')

    // reset form
    name.value = ''
    file.value = null

  } catch (err) {
    console.error(err)
    alert('Terjadi error')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  let currentStep = 1;
  const totalSteps = 3;


  function updateStep() {
    // Show/Hide Steps
    $('.form-step').removeClass('active');
    $(`#step-${currentStep}`).addClass('active');

    // Update Indicators
    $('.step-indicator').removeClass('active');
    for (let i = 1; i <= currentStep; i++) {
      $(`#indicator-${i}`).addClass('active');
    }

    // Update Buttons
    if (currentStep === 1) {
      $('#prevBtn').addClass('opacity-0 cursor-default');
    } else {
      $('#prevBtn').removeClass('opacity-0 cursor-default');
    }

    if (currentStep === totalSteps) {
      $('#nextBtn').text('Submit Pendaftaran').addClass('bg-secondary !text-primary shadow-secondary/20');
      setTimeout(() => {
        $('#nextBtn').attr('type', 'submit');
      }, 2000);

    } else {
      $('#nextBtn').text('Berikutnya').removeClass('bg-secondary !text-primary shadow-secondary/20');
    }
  }

  $('#nextBtn').on('click', function () {
    if (currentStep < totalSteps) {
      currentStep++;
      updateStep();
    } else {
      // Final Submit
      if (!$('#confirm').is(':checked')) {
        Swal.fire({
          title: 'Perhatian',
          text: 'Harap centang konfirmasi pernyataan data benar sebelum mendaftar.',
          icon: 'warning',
          confirmButtonColor: '#064e3b'
        });
        return;
      }

      Swal.fire({
        title: '<span class="font-serif text-primary">Kirim Pendaftaran?</span>',
        text: "Pastikan seluruh data yang Anda masukkan sudah benar.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#064e3b',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Kirim!',
        cancelButtonText: 'Cek Kembali',
        background: '#fdfbf0',
        customClass: {
          popup: 'rounded-3xl'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          handleSubmit();

          // Optional: Reset form or redirect
        }
      });
    }
  });

  $('#prevBtn').on('click', function () {
    if (currentStep > 1) {
      currentStep--;
      updateStep();
    }
  });
});
</script>

<template>
  <div>
    <Header />
    <section class="py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Syarat & Berkas -->
          <div class="text-left">
            <h2 class="text-primary font-serif text-3xl mb-8 border-b-2 border-secondary inline-block pb-2">Syarat &
              Berkas</h2>

            <div class="space-y-6">
              <div class="flex gap-4">
                <div
                  class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                  1</div>
                <p class="text-slate-600 text-sm leading-relaxed">Berusia maksimal 13 tahun untuk jenjang SMP dan 16
                  tahun untuk jenjang SMA.</p>
              </div>
              <div class="flex gap-4">
                <div
                  class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                  2</div>
                <p class="text-slate-600 text-sm leading-relaxed">Pas foto berwarna ukuran 3x4 (3 lembar) dengan latar
                  belakang merah.</p>
              </div>
              <div class="flex gap-4">
                <div
                  class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                  3</div>
                <p class="text-slate-600 text-sm leading-relaxed">Fotokopi Akta Kelahiran, Kartu Keluarga, dan Ijazah
                  terakhir (legalisir).</p>
              </div>
              <div class="flex gap-4">
                <div
                  class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
                  4</div>
                <p class="text-slate-600 text-sm leading-relaxed">Surat keterangan sehat dari dokter dan bebas dari
                  penyakit menular.</p>
              </div>
            </div>

            <div class="mt-12 p-6 bg-accent rounded-3xl border border-secondary/20">
              <h4 class="font-bold text-primary mb-3 text-sm">Informasi Penting:</h4>
              <p class="text-slate-500 text-xs leading-relaxed italic">Seluruh berkas fisik wajib dibawa saat melakukan
                ujian seleksi tatap muka di kampus Pesantren Al-Hikmah.</p>
            </div>
          </div>

          <!-- Biaya Pendidikan -->
          <div class="text-left">
            <h2 class="text-primary font-serif text-3xl mb-8 border-b-2 border-secondary inline-block pb-2">Rincian
              Biaya</h2>

            <div class="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table class="w-full text-left">
                <thead class="bg-primary text-secondary text-xs uppercase font-bold tracking-widest">
                  <tr>
                    <th class="px-6 py-4">Keterangan</th>
                    <th class="px-6 py-4 text-right">Besaran Biaya</th>
                  </tr>
                </thead>
                <tbody class="text-sm divide-y divide-slate-100">
                  <tr>
                    <td class="px-6 py-4 text-slate-600">Pendaftaran & Seleksi</td>
                    <td class="px-6 py-4 text-right font-bold text-primary">Rp 500.000</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-slate-600">Uang Pangkal (Gedung & Wakaf)</td>
                    <td class="px-6 py-4 text-right font-bold text-primary">Rp 12.500.000</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-slate-600">Seragam & Perlengkapan (5 Set)</td>
                    <td class="px-6 py-4 text-right font-bold text-primary">Rp 2.500.000</td>
                  </tr>
                  <tr class="bg-slate-50">
                    <td class="px-6 py-4 font-bold text-primary">Total Biaya Masuk</td>
                    <td class="px-6 py-4 text-right font-bold text-secondary text-lg">Rp 15.500.000</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-slate-400 italic text-xs" colspan="2">
                      * SPP Bulanan (Makan, Asrama, Pendidikan): Rp 2.500.000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Registration Form Section -->
    <section class="py-16 md:py-24 bg-accent/30">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <!-- Step Indicator -->
          <div
            class="bg-primary p-8 flex justify-between items-center text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">
            <div class="flex items-center gap-2 step-indicator active" id="indicator-1">
              <span class="w-6 h-6 rounded-full border border-current flex items-center justify-center">1</span>
              <span class="hidden md:inline">Data Santri</span>
            </div>
            <div class="w-12 h-px bg-white/10"></div>
            <div class="flex items-center gap-2 step-indicator" id="indicator-2">
              <span class="w-6 h-6 rounded-full border border-current flex items-center justify-center">2</span>
              <span class="hidden md:inline">Wali Santri</span>
            </div>
            <div class="w-12 h-px bg-white/10"></div>
            <div class="flex items-center gap-2 step-indicator" id="indicator-3">
              <span class="w-6 h-6 rounded-full border border-current flex items-center justify-center">3</span>
              <span class="hidden md:inline">Berkas Digital</span>
            </div>
          </div>

          <!-- Form Steps -->
          <form id="regForm" class="p-8 md:p-16">

            <!-- Step 1: Data Santri -->
            <div class="form-step active" id="step-1">
              <h3 class="text-2xl font-serif text-primary mb-8 text-left">Biodata Calon Santri</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="text-left">
                  <label class="block text-[10px] font-bold text-primary uppercase mb-2">Nama Lengkap</label>
                  <input type="text" name="nama" v-model="name"
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-secondary transition"
                    placeholder="Sesuai Ijazah">
                </div>
                <div class="text-left">
                  <label class="block text-[10px] font-bold text-primary uppercase mb-2">NIK Santri</label>
                  <input type="text" name="nik" v-model="nik"
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-secondary transition"
                    placeholder="16 Digit NIK">
                </div>
                <div class="text-left">
                  <label class="block text-[10px] font-bold text-primary uppercase mb-2">Tempat Lahir</label>
                  <input type="text" name="tempat_lahir" v-model="tempat_lhr"
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-secondary transition"
                    placeholder="Kota Kelahiran">
                </div>
                <div class="text-left">
                  <label class="block text-[10px] font-bold text-primary uppercase mb-2">Tanggal Lahir</label>
                  <input type="date" name="tgl_lahir" v-model="tgl_lhr"
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-secondary transition">
                </div>
                <div class="text-left">
                  <label class="block text-[10px] font-bold text-primary uppercase mb-2">Jenis Kelamin</label>
                  <select name="jk" v-model="jk"
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-secondary transition">
                    <option value="L">Laki-laki (Putra)</option>
                    <option value="P">Perempuan (Putri)</option>
                  </select>
                </div>

              </div>
            </div>

            <!-- Step 2: Data Wali -->
            <div class="form-step" id="step-2">
              <h3 class="text-2xl font-serif text-primary mb-8 text-left">Informasi Wali Santri</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="text-left">
                  <label class="block text-[10px] font-bold text-primary uppercase mb-2">Nama Ayah Kandung</label>
                  <input type="text" name="nama_ayah" v-model="nama_ayah"
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-secondary transition"
                    placeholder="Nama Ayah">
                </div>
                <div class="text-left">
                  <label class="block text-[10px] font-bold text-primary uppercase mb-2">Nama Ibu Kandung</label>
                  <input type="text" name="nama_ibu" v-model="nama_ibu"
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-secondary transition"
                    placeholder="Nama Ibu">
                </div>
                <div class="text-left md:col-span-2">
                  <label class="block text-[10px] font-bold text-primary uppercase mb-2">Nomor WhatsApp Aktif</label>
                  <input type="tel" name="hp" v-model="hp"
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-secondary transition"
                    placeholder="Contoh: 0812xxxxxxxx">
                </div>
                <div class="text-left md:col-span-2">
                  <label class="block text-[10px] font-bold text-primary uppercase mb-2">Alamat Lengkap</label>
                  <textarea name="alamat" rows="3" v-model="alamat"
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-secondary transition"
                    placeholder="Jalan, No. Rumah, RT/RW, Desa, Kec, Kab/Kota"></textarea>
                </div>
              </div>
            </div>

            <!-- Step 3: Berkas Digital -->
            <div class="form-step" id="step-3">
              <h3 class="text-2xl font-serif text-primary mb-8 text-left">Unggah Berkas Digital</h3>
              <p class="text-xs text-slate-400 mb-8 text-left italic">*Format file .JPG atau .PDF maksimal 2MB per file.
              </p>

              <div class="space-y-6">
                <div
                  class="flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-200 border-dashed">
                  <div class="text-left mb-4 md:mb-0">
                    <h4 class="font-bold text-primary text-sm">Kartu Keluarga (KK)</h4>
                    <p class="text-[10px] text-slate-500 uppercase tracking-wider">Wajib Diunggah</p>
                  </div>
                  <input type="file" @change="handleFoto"
                    class="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-secondary file:text-primary hover:file:bg-yellow-500 cursor-pointer">
                </div>

                <div
                  class="flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-200 border-dashed">
                  <div class="text-left mb-4 md:mb-0">
                    <h4 class="font-bold text-primary text-sm">Pas Foto Santri</h4>
                    <p class="text-[10px] text-slate-500 uppercase tracking-wider">Background Merah</p>
                  </div>
                  <input type="file" @change="handleKK"
                    class="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-secondary file:text-primary hover:file:bg-yellow-500 cursor-pointer">
                </div>

                <div class="flex items-start mt-8">
                  <input type="checkbox" id="confirm"
                    class="mt-1 w-4 h-4 text-primary border-slate-300 rounded focus:ring-secondary">
                  <label for="confirm" class="ml-3 text-[10px] text-slate-500 leading-relaxed text-left">
                    Dengan ini saya menyatakan bahwa seluruh data yang diisi adalah benar dan dapat
                    dipertanggungjawabkan. Saya bersedia mengikuti seluruh prosedur seleksi di Pesantren Al-Hikmah.
                  </label>
                </div>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="mt-12 pt-8 border-t border-slate-100 flex justify-between gap-4">
              <button type="button" id="prevBtn"
                class="px-10 py-4 bg-slate-100 text-slate-400 font-bold rounded-2xl transition opacity-0 cursor-default">Sebelumnya</button>
              <button type="button" id="nextBtn"
                class="px-10 py-4 bg-primary text-secondary font-bold rounded-2xl shadow-xl hover:bg-emerald-900 transition">Berikutnya</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.pattern-bg {
  background-image: url('https://www.transparenttextures.com/patterns/islamic-art.png');
}

.step-indicator.active {
  border: 1px solid #d4af37;
  color: #d4af37;
  border-color: #d4af37;
  border-radius: 20px;
  padding: 10px;
  font-weight: bold;
}

.form-step {
  display: none;
}

.form-step.active {
  display: block;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
