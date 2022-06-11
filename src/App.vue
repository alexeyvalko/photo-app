<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarItem from '@/components/NavbarItem/NavbarItem.vue';
</script>

<template>
  <NavbarItem />
  <main class="main">
    <div class="wrapper">
      <RouterView />
    </div>
  </main>
</template>

<style>
@import '@/styles/base.css';
</style>
