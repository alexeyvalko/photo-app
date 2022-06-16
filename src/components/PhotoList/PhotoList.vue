<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
import HeaderItem from '@/components/HeaderItem.vue';
import { usePhotoStore } from '@/stores/photo';
import type { Ref } from 'vue';
import { createObserver } from '@/utils';

const observed = ref(null) as Ref<Element | null>;
const observerBottom = ref(null) as Ref<Element | null>;
const photoStore = usePhotoStore();
onMounted(async () => {
  if (photoStore.photos.length === 0) {
    await photoStore.getPhotoList();
  }
  createObserver([observed.value, observerBottom.value], photoStore.loadPosts);
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
    <div ref="observed" class="observer"></div>
    <div ref="observerBottom" class="observer-bottom"></div>
  </div>
</template>

<style>
@import '@/styles/list.css';
</style>
