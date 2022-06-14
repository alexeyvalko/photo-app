<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
import { usePhotoStore } from '@/stores/photo';
import type { Ref } from 'vue';
import { createObserver } from '@/utils';

const observed = ref(null) as Ref<Element | null>;
const photoStore = usePhotoStore();
onMounted(async () => {
  if (photoStore.photos.length === 0) await photoStore.fetchPhotos();
  createObserver(observed.value, photoStore.loadPosts);
});

const threeColumns = computed(() => {
  return photoStore.filteredByThreeColumn;
});
const twoColumns = computed(() => {
  return photoStore.filteredByTwoColumn;
});
</script>

<template>
  <div class="photos-wrapper">
    <ThreeColumns :columns="threeColumns" />
    <TwoColumns :columns="twoColumns" />
    <div ref="observed" class="observer"></div>
  </div>
</template>

<style scoped>
.photos-wrapper {
  position: relative;
  padding: 0 var(--column-gutter);
  width: 100%;
}

.observer {
  position: absolute;
  width: 0;
  bottom: 35%;
  left: 0;
  height: 10px;
  opacity: 0;
}

@media (max-width: 768px) {
  .photos-wrapper {
    padding: 0;
  }
}
</style>
