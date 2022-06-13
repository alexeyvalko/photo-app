<script setup lang="ts">
import { useImagesStore } from '@/stores/images';
import PhotoList from '@/components/PhotoList/PhotoList.vue';
const imagesStore = useImagesStore();
</script>

<template>
  <h1>Free stock photos</h1>
  <p>
    {{ imagesStore.searchQuery }}
  </p>
  <PhotoList />
</template>
