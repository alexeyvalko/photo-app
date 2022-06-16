<script setup lang="ts">
import { onMounted, computed } from 'vue';
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
import HeaderItem from '@/components/UI/HeaderItem.vue';
import { usePhotoStore } from '@/stores/photo';
import ObserverItem from '../ObserverItem.vue';

const photoStore = usePhotoStore();
onMounted(async () => {
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
  <div class="photos-wrapper">
    <HeaderItem> Free Stock Photos</HeaderItem>
    <ThreeColumns :columns="threeColumns" />
    <TwoColumns :columns="twoColumns" />
    <ObserverItem :callback="photoStore.loadPosts" />
  </div>
</template>

<style>
@import '@/styles/list.css';
</style>
