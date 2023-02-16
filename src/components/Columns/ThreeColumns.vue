<template>
  <ThreeColumnsLayout>
    <template #column-1>
      <TransitionGroup name="list">
        <template
          v-for="photo in props.columns.column_1"
          :key="photo.id + 'three-1'"
        >
          <PhotoCard :photo="photo" />
        </template>
      </TransitionGroup>
    </template>
    <template #column-2>
      <TransitionGroup name="list">
        <template
          v-for="photo in props.columns.column_2"
          :key="photo.id + 'three-2'"
        >
          <PhotoCard :photo="photo" />
        </template>
      </TransitionGroup>
    </template>

    <template #column-3>
      <TransitionGroup name="list">
        <template
          v-for="photo in props.columns.column_3"
          :key="photo.id + 'three-3'"
        >
          <PhotoCard :photo="photo" />
        </template>
      </TransitionGroup>
    </template>
  </ThreeColumnsLayout>
</template>

<script setup lang="ts">
import PhotoCard from '@/components/PhotoCard/PhotoCard.vue';
import ThreeColumnsLayout from '@/components/Columns/ThreeColumnsLayout.vue';
import type { Photo } from '@/types/photos';
const props = defineProps<{
  columns: {
    [key: string]: Photo[];
  };
}>();
</script>
