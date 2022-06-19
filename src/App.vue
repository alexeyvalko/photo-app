<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarItem from '@/components/NavbarItem/NavbarItem.vue';
import MobileMenu from '@/components/MobileMenu/MobileMenu.vue';
</script>

<template>
  <NavbarItem />
  <main class="main">
    <div class="wrapper">
      <RouterView />
    </div>
  </main>
  <MobileMenu />
</template>

<style>
@import '@/styles/base.css';
</style>
