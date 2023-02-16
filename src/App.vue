<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarItem from '@/components/NavbarItem/NavbarItem.vue';
import MobileMenu from '@/components/MobileMenu/MobileMenu.vue';
import FooterItem from '@/components/Footer/FooterItem.vue';
</script>

<template>
  <NavbarItem />
  <main class="main wrapper" id="main" tabindex="-1">
    <router-view />
  </main>
  <FooterItem />
  <MobileMenu />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease 0.3s;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
