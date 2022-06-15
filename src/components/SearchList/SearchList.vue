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

const updateQuery = async () => {
  searchStore.$patch({
    query: route.params.query as string,
  });
  await searchStore.searchPhotos();
};
onMounted(async () => {
  updateQuery();
  createObserver([observed.value, observerBottom.value], searchStore.loadPosts);
});

watch(() => route.params.query, updateQuery);

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

.observer-bottom {
  position: absolute;
  width: 0;
  bottom: 10px;
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
