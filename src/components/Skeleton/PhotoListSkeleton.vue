<template>
  <ThreeColumnsLayout>
    <template #column-1>
      <template v-for="card in props.cards" :key="card">
        <SkeletonCard :ratio="ratioListOne[card - 1] || 1.2" />
      </template>
    </template>
    <template #column-2>
      <template v-for="card in props.cards" :key="card">
        <SkeletonCard :ratio="ratioListTwo[card - 1] || 1.2" />
      </template>
    </template>
    <template #column-3>
      <template v-for="card in props.cards" :key="card">
        <SkeletonCard :ratio="ratioListThree[card - 1] || 1.2" />
      </template>
    </template>
  </ThreeColumnsLayout>
  <TwoColumnsLayout>
    <template #column-1>
      <template v-for="card in props.cards" :key="card">
        <SkeletonCard :ratio="ratioListOne[card - 1] || 1.2" />
      </template>
    </template>
    <template #column-2>
      <template v-for="card in props.cards" :key="card">
        <SkeletonCard :ratio="ratioListTwo[card - 1] || 1.2" />
      </template>
    </template>
  </TwoColumnsLayout>
</template>

<script setup lang="ts">
import SkeletonCard from './SkeletonCard.vue';
import ThreeColumnsLayout from '@/components/Columns/ThreeColumnsLayout.vue';
import TwoColumnsLayout from '@/components/Columns/TwoColumnsLayout.vue';
const props = defineProps<{
  cards: number;
}>();

const ratioListOne = [1.2, 0.8, 1, 0.7, 1, 1.2, 0.8];
const ratioListTwo = [0.8, 1, 1.3, 1.2, 1.2, 1, 1.5];
const ratioListThree = [1.7, 0.9, 1, 0.6, 1, 2, 0.5];
</script>

<style>
.skeleton-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  justify-content: space-between;
  grid-gap: var(--column-gutter);
}

@media (max-width: 1024px) {
  .skeleton-container {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: calc(var(--column-gutter) / 2);
  }
}
</style>
