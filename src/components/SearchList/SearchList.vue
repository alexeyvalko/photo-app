<script setup lang="ts">
import { onMounted, computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
import HeaderItem from '@/components/UI/HeaderItem.vue';
import { useSearchStore } from '@/stores/search';
import ObserverItem from '../ObserverItem.vue';

const route = useRoute();
const searchStore = useSearchStore();
const header = ref('');

const updateHeaderAndTitle = (decodedQuery: string) => {
  const firstLetter = decodedQuery[0]?.toUpperCase();
  const upperCasedWord = firstLetter + decodedQuery.slice(1);
  header.value = upperCasedWord;
  document.title = `Free ${upperCasedWord} Photos`;
};

const getComponentData = async () => {
  const query = route.params.query as string;
  const decodedQuery = decodeURIComponent(query);
  if (query) {
    updateHeaderAndTitle(decodedQuery);
  }
  if (query && decodedQuery !== searchStore.pageQuery) {
    searchStore.$patch({
      query: decodedQuery,
      pageQuery: decodedQuery,
    });
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
  await getComponentData();
});

watch(() => route.params.query, getComponentData);
</script>

<template>
  <div class="photos-wrapper">
    <HeaderItem> {{ header }} Photos</HeaderItem>
    <ThreeColumns :columns="threeColumns" />
    <TwoColumns :columns="twoColumns" />
    <ObserverItem :callback="searchStore.loadPosts" />
  </div>
</template>

<style>
@import '@/styles/list.css';
</style>
