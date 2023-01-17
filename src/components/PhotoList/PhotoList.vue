<script setup lang="ts">
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
import type { Photo } from '@/types/photos';
import ObserverItem from '../ObserverItem.vue';

const props = defineProps<{
  threeColumns: {
    [key: string]: Photo[];
  };
  twoColumns: {
    [key: string]: Photo[];
  };
  loader: () => void;
}>();
</script>

<template>
  <section class="list-container">
    <ThreeColumns :columns="props.threeColumns" />
    <TwoColumns :columns="props.twoColumns" />
    <ObserverItem :callback="props.loader" />
  </section>
</template>

<style>
.list-container {
  padding-bottom: var(--column-gutter);
}
</style>
