<template>
  <TwoColumnsLayout>
    <template #column-1>
      <template v-for="photo in props.columns.one" :key="photo.id + 'two-1'">
        <PhotoCard :photo="photo" />
      </template>
    </template>
    <template #column-2>
      <template v-for="photo in props.columns.two" :key="photo.id + 'two-2'">
        <PhotoCard :photo="photo" />
      </template>
    </template>
  </TwoColumnsLayout>
</template>

<script setup lang="ts">
import PhotoCard from '@/components/PhotoCard/PhotoCard.vue';
import TwoColumnsLayout from '@/components/Columns/TwoColumnsLayout.vue';
import type { PhotoBasic } from '@/types/photos';
const props = defineProps<{
  columns: {
    one: PhotoBasic[];
    two: PhotoBasic[];
  };
}>();
</script>
