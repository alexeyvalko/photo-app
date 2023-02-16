<script setup lang="ts">
import { computed, onBeforeMount, watch } from 'vue';
import { useRoute } from 'vue-router';
import HeaderItem from '@/components/UI/HeaderItem.vue';
import PhotoList from '@/components/PhotoList/PhotoList.vue';
import CustomSelect from '@/components/UI/CustomSelect.vue';
import ColorsSelect from '@/components/UI/ColorsSelect.vue';
import {
  SEARCH_ORDER_OPTIONS,
  ORIENTATION_OPTIONS,
  DEFAULT_ORIENTATION_OPTION,
  DEFAULT_SEARCH_ORDER,
  COLOR_OPTIONS,
  DEFAULT_TITLE,
} from '@/common/config';
import { useSearchStore } from '@/stores/search';
import { decodeQuery, capitalizeFirstLetter } from '@/utils';
import router from '@/router';
import type {
  SearchColorsType,
  SearchOrderType,
  SearchOrientationType,
} from '@/types/helpers';

const route = useRoute();
const store = useSearchStore();
const searchQuery = computed(() =>
  route.params.query ? decodeQuery(route.params.query as string) : '',
);
const header = computed(() => capitalizeFirstLetter(searchQuery.value));

const threeColumns = computed(() => {
  return store.filteredThreeColumnsByRatio;
});
const twoColumns = computed(() => {
  return store.filteredTwoColumnsByRatio;
});

const getComponentData = () => {
  if (route.query) {
    store.getQueryParams(route.query);
  }
  if (searchQuery.value) {
    store.query = searchQuery.value;
    store.searchPhotos();
  }
};

const handleChangeColor = (color: SearchColorsType) => {
  store.setColor(color);
  router.replace({ query: store.searchQueryParams });
};

const handleChangeOrientation = (
  orientation: SearchOrientationType | 'All orientations',
) => {
  store.setOrientation(orientation);
  router.replace({ query: store.searchQueryParams });
};

const handleChangeOrder = (orderBy: SearchOrderType) => {
  store.setOrderBy(orderBy);
  router.replace({ query: store.searchQueryParams });
};

const handleLoadPhotos = () => {
  store.loadPosts();
  router.replace({
    query: store.searchQueryParams,
  });
};

const watcher = () => {
  document.title = `Free ${searchQuery.value} photos - ${DEFAULT_TITLE}`;
  getComponentData();
};

onBeforeMount(watcher);
watch(searchQuery, watcher);
</script>

<template>
  <div class="container">
    <section class="header-container">
      <HeaderItem> {{ header }} photos</HeaderItem>
    </section>
    <div class="filter-container">
      <ColorsSelect
        :options="COLOR_OPTIONS"
        :currentOption="store.color || COLOR_OPTIONS.colors.any"
        @changeOption="handleChangeColor"
      />
      <CustomSelect
        :options="[DEFAULT_ORIENTATION_OPTION, ...ORIENTATION_OPTIONS]"
        :currentOption="store.orientation || DEFAULT_ORIENTATION_OPTION"
        @changeOption="handleChangeOrientation"
      />
      <CustomSelect
        :options="SEARCH_ORDER_OPTIONS"
        :currentOption="store.orderBy || DEFAULT_SEARCH_ORDER"
        @changeOption="handleChangeOrder"
      />
    </div>

    <PhotoList
      :threeColumns="threeColumns"
      :twoColumns="twoColumns"
      :loader="handleLoadPhotos"
      :is-loading="store.isLoading"
      :photos-length="store.photos?.length || 0"
    />

    <section
      class="header-container"
      v-if="!store.isLoading && store.photos.length === 0"
    >
      <h2>Oops, can't find anything</h2>
    </section>
  </div>
</template>

<style scoped>
.header-container {
  padding-top: 30px;
  padding-bottom: 10px;
  text-align: center;
}
</style>
