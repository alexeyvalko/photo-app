<template>
  <TwoColumnsLayout v-if="props.photos.length > 0">
    <template #column-1>
      <template v-for="photo in firstColumnPhotos" :key="photo.id + 'two-1'">
        <PhotoCard :photo="photo" />
      </template>
    </template>
    <template #column-2>
      <template v-for="photo in secondColumnPhotos" :key="photo.id + 'two-2'">
        <PhotoCard :photo="photo" />
      </template>
    </template>
  </TwoColumnsLayout>
</template>

<script setup lang="ts">
import PhotoCard from '@/components/PhotoCard/PhotoCard.vue';
import TwoColumnsLayout from '@/components/Columns/TwoColumnsLayout.vue';
import { filterPhotosByColumn } from '@/utils';
import type { PhotoBasic } from '@/types/photos';
const props = defineProps<{
  photos: PhotoBasic[];
}>();

const firstColumnPhotos = filterPhotosByColumn(props.photos, 1);
const secondColumnPhotos = filterPhotosByColumn(props.photos, 2);
</script>
