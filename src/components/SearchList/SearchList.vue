<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
import { useSearchStore } from '@/stores/search';
import ObserverItem from '../ObserverItem.vue';

const searchStore = useSearchStore();
const props = defineProps<{
  query: string;
}>();

const getComponentData = async () => {
  if (props.query !== searchStore.pageQuery) {
    searchStore.$patch({
      query: props.query,
      pageQuery: props.query,
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

watch(() => props.query, getComponentData);
</script>

<template>
  <div class="container">
    <ThreeColumns :columns="threeColumns" />
    <TwoColumns :columns="twoColumns" />
    <ObserverItem :callback="searchStore.loadPosts" />
  </div>
</template>
