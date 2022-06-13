<script setup lang="ts">
import { onMounted } from 'vue';
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
import { usePhotosStore } from '@/stores/photos';

const photosStore = usePhotosStore();
onMounted(() => {
  if (photosStore.photos.length === 0) photosStore.fetchLatestPhotos();
});
</script>

<template>
  <div class="photos-wrapper">
    <ThreeColumns :photos="photosStore.photos" />
    <TwoColumns :photos="photosStore.photos" />
  </div>
</template>

<style scoped>
.photos-wrapper {
  padding: 0 var(--column-gutter);
  width: 100%;
}

@media (max-width: 768px) {
  .photos-wrapper {
    padding: 0;
  }
}
</style>
