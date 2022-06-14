<script setup lang="ts">
import { usePhotoStore } from '@/stores/photo';
import PhotoList from '@/components/PhotoList/PhotoList.vue';

const photoStore = usePhotoStore();
</script>

<template>
  <h1>Free stock photos</h1>
  <p>
    {{ photoStore.searchQuery }}
  </p>
  <PhotoList />
</template>
