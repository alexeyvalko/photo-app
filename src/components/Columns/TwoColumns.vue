<template>
  <TwoColumnsLayout v-if="props.photos.length > 0">
    <template #column-1>
      <template v-for="photo in props.photos" :key="photo.id + 'two-1'">
        <PhotoCard :photo="photo" v-if="count() === 1" />
      </template>
    </template>
    <template #column-2>
      <template v-for="photo in props.photos" :key="photo.id + 'two-2'">
        <PhotoCard :photo="photo" v-if="count() === 2" />
      </template>
    </template>
  </TwoColumnsLayout>
</template>

<script setup lang="ts">
import PhotoCard from '@/components/PhotoCard/PhotoCard.vue';
import TwoColumnsLayout from '@/components/Columns/TwoColumnsLayout.vue';
import { columnsCounter } from '@/utils/columnsCounter';
import type { PhotoBasic } from '@/types/photos';
const props = defineProps<{
  photos: PhotoBasic[];
}>();
const count = columnsCounter(2);
</script>
