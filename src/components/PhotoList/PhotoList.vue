<script setup lang="ts">
import { data } from '@/components/data';
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
const photos = data.results;
</script>

<template>
  <div class="photos-wrapper">
    <ThreeColumns :photos="photos" />
    <TwoColumns :photos="photos" />
  </div>
</template>

<style scoped>
.photos-wrapper {
  padding: 0 var(--column-gutter);
  width: 100%;
}

@media (max-width: 768px) {
  .photos-wrapper {
    padding: 0;
  }
}
</style>
