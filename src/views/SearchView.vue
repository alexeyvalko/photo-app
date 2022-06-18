<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import HeaderItem from '@/components/UI/HeaderItem.vue';
import PhotoList from '@/components/PhotoList/PhotoList.vue';
import CustomSelect from '@/components/UI/CustomSelect.vue';
import {
  SEARCH_ORDER_OPTIONS,
  ORIENTATION_OPTIONS,
  DEFAULT_ORIENTATION_OPTION,
} from '@/common/config';
import { useSearchStore } from '@/stores/search';

const route = useRoute();
const store = useSearchStore();
const decodedQuery = ref('');
const header = ref('');

const updateHeaderAndTitle = () => {
  const query = route.params.query as string;
  decodedQuery.value = query ? decodeURIComponent(query) : '';
  header.value = decodedQuery.value;
  document.title = `Free ${decodedQuery.value} Photos`;
};

const watcher = () => {
  updateHeaderAndTitle();
  getComponentData();
};

const threeColumns = computed(() => {
  return store.filteredByThreeColumn;
});
const twoColumns = computed(() => {
  return store.filteredByTwoColumn;
});

const getComponentData = async () => {
  if (decodedQuery.value && decodedQuery.value !== store.pageQuery) {
    store.$patch({
      query: decodedQuery.value,
      pageQuery: decodedQuery.value,
    });
    await store.searchPhotos();
  }
};

onBeforeMount(updateHeaderAndTitle);
onMounted(async () => {
  await getComponentData();
});
watch(() => route.params.query, watcher);
</script>

<template>
  <div class="container">
    <div class="header-container">
      <HeaderItem> {{ header }} Photos</HeaderItem>
    </div>

    <div class="filter-wrapper" v-if="decodedQuery">
      <CustomSelect
        :options="[DEFAULT_ORIENTATION_OPTION, ...ORIENTATION_OPTIONS]"
        :currentOption="store.orientation || DEFAULT_ORIENTATION_OPTION"
        @changeOption="store.setOrientation"
      />
      <CustomSelect
        :options="SEARCH_ORDER_OPTIONS"
        :currentOption="store.orderBy"
        @changeOption="store.setOrderBy"
      />
    </div>
  </div>
  <PhotoList
    :threeColumns="threeColumns"
    :twoColumns="twoColumns"
    :loader="store.loadPosts"
  />
</template>

<style scoped>
.header-container {
  padding-top: 30px;
  padding-bottom: 10px;
  text-align: center;
}
</style>
