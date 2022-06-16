<script setup lang="ts">
import { onMounted, computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
import HeaderItem from '@/components/UI/HeaderItem.vue';
import { useSearchStore } from '@/stores/search';
import { createObserver } from '@/utils';
import type { Ref } from 'vue';

const route = useRoute();
const observed = ref(null) as Ref<Element | null>;
const observerBottom = ref(null) as Ref<Element | null>;
const searchStore = useSearchStore();

const header = ref('');

const updateHeaderAndTitle = (decodedQuery: string) => {
  const firstLetter = decodedQuery[0]?.toUpperCase();
  const upperCasedWord = firstLetter + decodedQuery.slice(1);
  header.value = upperCasedWord;
  document.title = `Free ${upperCasedWord} Photos`;
};

const updateQueryAndSearch = async () => {
  const query = route.params.query as string;
  const decodedQuery = decodeURIComponent(query);
  if (query && decodedQuery !== searchStore.pageQuery) {
    searchStore.$patch({
      query: decodedQuery,
      pageQuery: decodedQuery,
    });
    updateHeaderAndTitle(decodedQuery);
    await searchStore.searchPhotos();
  }
};

const threeColumns = computed(() => {
  return searchStore.filteredByThreeColumn;
});
const twoColumns = computed(() => {
  return searchStore.filteredByTwoColumn;
});

onMounted(async () => {
  updateQueryAndSearch();
  createObserver([observed.value, observerBottom.value], searchStore.loadPosts);
});

watch(() => route.params.query, updateQueryAndSearch);
</script>

<template>
  <div class="photos-wrapper">
    <HeaderItem> {{ header }} Photos</HeaderItem>
    <ThreeColumns :columns="threeColumns" />
    <TwoColumns :columns="twoColumns" />
    <div ref="observed" class="observer"></div>
    <div ref="observerBottom" class="observer-bottom"></div>
  </div>
</template>

<style>
@import '@/styles/list.css';
</style>
