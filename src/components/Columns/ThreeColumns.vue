<template>
  <ThreeColumnsLayout v-if="props.photos.length > 0">
    <template #column-1>
      <template v-for="photo in firstColumnPhotos" :key="photo.id + 'three-1'">
        <PhotoCard :photo="photo" />
      </template>
    </template>
    <template #column-2>
      <template v-for="photo in secondColumnPhotos" :key="photo.id + 'three-2'">
        <PhotoCard :photo="photo" />
      </template>
    </template>
    <template #column-3>
      <template v-for="photo in thirdColumnPhotos" :key="photo.id + 'three-3'">
        <PhotoCard :photo="photo" />
      </template>
    </template>
  </ThreeColumnsLayout>
</template>

<script setup lang="ts">
import PhotoCard from '@/components/PhotoCard/PhotoCard.vue';
import ThreeColumnsLayout from '@/components/Columns/ThreeColumnsLayout.vue';
import { filterPhotosByColumn } from '@/utils';
import type { PhotoBasic } from '@/types/photos';
const props = defineProps<{
  photos: PhotoBasic[];
}>();

const firstColumnPhotos = filterPhotosByColumn(props.photos, 1);
const secondColumnPhotos = filterPhotosByColumn(props.photos, 2);
const thirdColumnPhotos = filterPhotosByColumn(props.photos, 3);
</script>
