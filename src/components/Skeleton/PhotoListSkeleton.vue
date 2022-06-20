<template>
  <div class="skeleton-container">
    <SkeletonCard v-for="card in props.cards" :key="card" />
  </div>
</template>

<script setup lang="ts">
import SkeletonCard from './SkeletonCard.vue';
const props = defineProps<{
  cards: number;
}>();
</script>

<style>
.skeleton-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  justify-content: space-between;
  grid-gap: var(--column-gutter);
}

@media (max-width: 768px) {
  .skeleton-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
