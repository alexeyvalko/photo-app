<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderItem from './components/HeaderItem.vue';
</script>

<template>
  <HeaderItem />
  <main class="main">
    <div class="wrapper">
      <RouterView />
    </div>
  </main>
</template>

<style>
@import '@/styles/base.css';
</style>
