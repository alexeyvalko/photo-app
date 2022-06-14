<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import PhotoList from '@/components/PhotoList/PhotoList.vue';
const searchStore = useSearchStore();
</script>

<template>
  <h1>Free stock photos</h1>
  <p>
    {{ searchStore.searchQuery }}
  </p>
  <PhotoList />
</template>
