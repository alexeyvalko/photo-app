<script setup lang="ts">
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
import type { PhotoBasic } from '@/types/photos';
import ObserverItem from '../ObserverItem.vue';

const props = defineProps<{
  threeColumns: {
    one: PhotoBasic[];
    two: PhotoBasic[];
    three: PhotoBasic[];
  };
  twoColumns: {
    one: PhotoBasic[];
    two: PhotoBasic[];
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
