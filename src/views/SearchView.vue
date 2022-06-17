<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import HeaderItem from '@/components/UI/HeaderItem.vue';
import SearchList from '@/components/SearchList/SearchList.vue';
import CustomSelect from '@/components/UI/CustomSelect.vue';
import {
  SEARCH_ORDER_OPTIONS,
  ORIENTATION_OPTIONS,
  DEFAULT_ORIENTATION_OPTION,
} from '@/common/config';
import { useSearchStore } from '@/stores/search';

const route = useRoute();
const searchStore = useSearchStore();
const decodedQuery = ref('');
const header = ref('');
const updateHeaderAndTitle = () => {
  if (route.params.query) {
    const query = route.params.query as string;
    decodedQuery.value = decodeURIComponent(query);
    const firstLetter = decodedQuery.value[0]?.toUpperCase();
    const upperCasedWord = firstLetter + decodedQuery.value.slice(1);
    header.value = upperCasedWord;
    document.title = `Free ${upperCasedWord} Photos`;
  }
};

onBeforeMount(updateHeaderAndTitle);
watch(() => route.params.query, updateHeaderAndTitle);
</script>

<template>
  <div class="container">
    <div class="header-container">
      <HeaderItem> {{ header }} Photos</HeaderItem>
    </div>

    <div class="filter-wrapper">
      <CustomSelect
        :options="[DEFAULT_ORIENTATION_OPTION, ...ORIENTATION_OPTIONS]"
        :currentOption="searchStore.orientation || DEFAULT_ORIENTATION_OPTION"
        @changeOption="searchStore.setOrientation"
      />
      <CustomSelect
        :options="SEARCH_ORDER_OPTIONS"
        :currentOption="searchStore.orderBy"
        @changeOption="searchStore.setOrderBy"
      />
    </div>
  </div>
  <SearchList :query="decodedQuery" />
</template>

<style scoped>
.header-container {
  padding-top: 30px;
  padding-bottom: 10px;
  text-align: center;
}
</style>
