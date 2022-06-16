<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import HeaderItem from '@/components/UI/HeaderItem.vue';
import SearchList from '@/components/SearchList/SearchList.vue';

const route = useRoute();
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
  <div class="container list-container">
    <HeaderItem> {{ header }} Photos</HeaderItem>
  </div>
  <SearchList :query="decodedQuery" />
</template>

<style scoped>
.list-container {
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
