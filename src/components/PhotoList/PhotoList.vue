<script setup lang="ts">
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
import type { PhotoBasic } from '@/types/photos';
import ObserverItem from '../ObserverItem.vue';

const props = defineProps<{
  threeColumns: {
    [key: string]: PhotoBasic[];
  };
  twoColumns: {
    [key: string]: PhotoBasic[];
  };
  loader: () => void;
}>();
</script>

<template>
  <div class="list-container">
    <ThreeColumns :columns="props.threeColumns" />
    <TwoColumns :columns="props.twoColumns" />
    <ObserverItem :callback="props.loader" />
  </div>
</template>

<style>
.list-container {
  padding-bottom: var(--column-gutter);
}
</style>
