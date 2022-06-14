<script setup lang="ts">
import { onMounted, computed } from 'vue';
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
import { usePhotoListStore } from '@/stores//photoList';

const photoListStore = usePhotoListStore();
onMounted(async () => {
  if (photoListStore.photos.length === 0)
    await photoListStore.fetchLatestPhotos();
});

const threeColumns = computed(() => {
  return photoListStore.filteredByThreeColumn;
});
const twoColumns = computed(() => {
  return photoListStore.filteredByTwoColumn;
});
</script>

<template>
  <div class="photos-wrapper" v-if="!photoListStore.isPhotoLIstLoading">
    <ThreeColumns :columns="threeColumns" />
    <TwoColumns :columns="twoColumns" />
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
