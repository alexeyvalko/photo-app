<script setup lang="ts">
import { useImagesStore } from '@/stores/images';
const imagesStore = useImagesStore();
</script>

<template>
  <h1>Home page</h1>
  <p>
    {{ imagesStore.searchQuery }}
  </p>
</template>
