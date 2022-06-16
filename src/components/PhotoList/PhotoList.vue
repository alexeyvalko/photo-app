<script setup lang="ts">
import { computed, onBeforeMount } from 'vue';
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
import { usePhotoStore } from '@/stores/photo';
import ObserverItem from '../ObserverItem.vue';

const photoStore = usePhotoStore();
onBeforeMount(async () => {
  if (photoStore.photos.length === 0) {
    await photoStore.getPhotoList();
  }
});

const threeColumns = computed(() => {
  return photoStore.filteredByThreeColumn;
});
const twoColumns = computed(() => {
  return photoStore.filteredByTwoColumn;
});
</script>

<template>
  <div class="container">
    <ThreeColumns :columns="threeColumns" />
    <TwoColumns :columns="twoColumns" />
    <ObserverItem :callback="photoStore.loadPosts" />
  </div>
</template>
