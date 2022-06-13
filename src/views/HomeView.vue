<script setup lang="ts">
import { usePhotosStore } from '@/stores/photos';
import PhotoList from '@/components/PhotoList/PhotoList.vue';
const imagesStore = usePhotosStore();
</script>

<template>
  <h1>Free stock photos</h1>
  <p>
    {{ imagesStore.searchQuery }}
  </p>
  <PhotoList />
</template>
