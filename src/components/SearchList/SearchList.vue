<script setup lang="ts">
import { onMounted, computed, ref, watch } from 'vue';
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
import { useSearchStore } from '@/stores/search';
import type { Ref } from 'vue';
import { createObserver } from '@/utils';
import { useRoute } from 'vue-router';

const route = useRoute();

const observed = ref(null) as Ref<Element | null>;
const observerBottom = ref(null) as Ref<Element | null>;
const searchStore = useSearchStore();

const updateQueryAndSearch = async () => {
  searchStore.$patch({
    query: route.params.query as string,
    pageQuery: route.params.query as string,
  });
  await searchStore.searchPhotos();
};
onMounted(async () => {
  updateQueryAndSearch();
  createObserver([observed.value, observerBottom.value], searchStore.loadPosts);
});

watch(() => route.params.query, updateQueryAndSearch);

const threeColumns = computed(() => {
  return searchStore.filteredByThreeColumn;
});
const twoColumns = computed(() => {
  return searchStore.filteredByTwoColumn;
});
</script>

<template>
  <div class="photos-wrapper">
    <ThreeColumns :columns="threeColumns" />
    <TwoColumns :columns="twoColumns" />
    <div ref="observed" class="observer"></div>
    <div ref="observerBottom" class="observer-bottom"></div>
  </div>
</template>

<style>
@import '@/styles/list.css';
</style>
