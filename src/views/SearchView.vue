<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import HeaderItem from '@/components/UI/HeaderItem.vue';
import PhotoList from '@/components/PhotoList/PhotoList.vue';
import CustomSelect from '@/components/UI/CustomSelect.vue';
import ColorsSelect from '@/components/UI/ColorsSelect.vue';
import PhotoListSkeleton from '@/components/Skeleton/PhotoListSkeleton.vue';
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

const route = useRoute();
const store = useSearchStore();
const searchQuery = ref('');
const header = ref('');
const updateHeaderAndTitle = () => {
  const query = route.params.query as string;
  searchQuery.value = query ? decodeQuery(query) : '';
  if (searchQuery.value)
    header.value = capitalizeFirstLetter(searchQuery.value);
  document.title = `Free ${searchQuery.value} photos - ${DEFAULT_TITLE}`;
};

// const watcher = (query: string | string[]) => {
//   if (query) {
//     updateHeaderAndTitle();
//     getComponentData();
//   }
// };

const threeColumns = computed(() => {
  return store.filteredThreeColumnsByRatio;
});
const twoColumns = computed(() => {
  return store.filteredTwoColumnsByRatio;
});

const getComponentData = async () => {
  if (route.query) {
    store.getQueryParams(route.query);
  }
  if (searchQuery.value) {
    store.$patch({
      query: searchQuery.value,
    });
    await store.searchPhotos();
  }
};

onBeforeMount(updateHeaderAndTitle);
onMounted(getComponentData);
// watch(() => route.params.query, watcher);
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
        @changeOption="store.setColor"
      />
      <CustomSelect
        :options="[DEFAULT_ORIENTATION_OPTION, ...ORIENTATION_OPTIONS]"
        :currentOption="store.orientation || DEFAULT_ORIENTATION_OPTION"
        @changeOption="store.setOrientation"
      />
      <CustomSelect
        :options="SEARCH_ORDER_OPTIONS"
        :currentOption="store.orderBy || DEFAULT_SEARCH_ORDER"
        @changeOption="store.setOrderBy"
      />
    </div>
    <Transition name="fade">
      <PhotoList
        v-if="store.photos.length > 0"
        :threeColumns="threeColumns"
        :twoColumns="twoColumns"
        :loader="store.loadPosts"
      />
      <section
        class="header-container"
        v-if="!store.isLoading && store.photos.length === 0"
      >
        <h2>Oops, can't find anything</h2>
      </section>
    </Transition>
    <Transition name="fade">
      <PhotoListSkeleton :cards="12" v-if="store.isLoading" />
    </Transition>
  </div>
</template>

<style scoped>
.header-container {
  padding-top: 30px;
  padding-bottom: 10px;
  text-align: center;
}
</style>
