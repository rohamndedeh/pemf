<script setup lang="ts">
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import { useRoute } from 'vue-router';
const route = useRoute();

</script>

<template>
  <Navbar v-if="!route.meta.hideNavigation && !route.path.startsWith('/admin')" />
  <router-view />
  <Footer v-if="!route.meta.hideNavigation && !route.path.startsWith('/admin')" />
</template>

<style scoped></style>
