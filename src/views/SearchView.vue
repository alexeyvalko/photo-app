<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import SearchList from '../components/SearchList/SearchList.vue';
const searchStore = useSearchStore();
</script>

<template>
  <h1>Free {{ searchStore.pageQuery }} photos</h1>
  <SearchList />
</template>
