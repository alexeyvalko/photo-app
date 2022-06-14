<script setup lang="ts">
import { onMounted } from 'vue';
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
import { usePhotoListStore } from '@/stores//photoList';

const photosStore = usePhotoListStore();
onMounted(async () => {
  if (photosStore.photos.length === 0) await photosStore.fetchLatestPhotos();
});
</script>

<template>
  <div class="photos-wrapper" v-if="!photosStore.isPhotoLIstLoading">
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
