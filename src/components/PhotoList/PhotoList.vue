<script setup lang="ts">
import ThreeColumns from '@/components/Columns/ThreeColumns.vue';
import TwoColumns from '@/components/Columns/TwoColumns.vue';
import type { Photo } from '@/types/photos';
import ObserverItem from '../ObserverItem.vue';
import PhotoListSkeleton from '../Skeleton/PhotoListSkeleton.vue';
import LoaderItem from '../UI/LoaderItem.vue';

const props = defineProps<{
  threeColumns: {
    [key: string]: Photo[];
  };
  twoColumns: {
    [key: string]: Photo[];
  };
  isLoading: boolean;
  photosLength: number;
  loader: () => void;
}>();
</script>

<template>
  <TransitionGroup name="fade">
    <div class="list-container" v-if="photosLength > 0">
      <ThreeColumns :columns="props.threeColumns" />
      <TwoColumns :columns="props.twoColumns" />
      <ObserverItem :callback="props.loader" />
    </div>
    <PhotoListSkeleton
      :cards="6"
      v-if="props.isLoading && photosLength === 0"
    />
    <LoaderItem position="center" v-if="props.isLoading && photosLength > 0" />
  </TransitionGroup>
</template>

<style>
.list-container {
  padding-bottom: var(--column-gutter);
}
</style>
