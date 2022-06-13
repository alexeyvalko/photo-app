<template>
  <ThreeColumnsLayout v-if="props.photos.length > 0">
    <template #column-1>
      <template v-for="photo in props.photos" :key="photo.id + 'three-1'">
        <PhotoCard :photo="photo" v-if="count() === 1" />
      </template>
    </template>
    <template #column-2>
      <template v-for="photo in props.photos" :key="photo.id + 'three-2'">
        <PhotoCard :photo="photo" v-if="count() === 2" />
      </template>
    </template>
    <template #column-3>
      <template v-for="photo in props.photos" :key="photo.id + 'three-3'">
        <PhotoCard :photo="photo" v-if="count() === 3" />
      </template>
    </template>
  </ThreeColumnsLayout>
</template>

<script setup lang="ts">
import PhotoCard from '@/components/PhotoCard/PhotoCard.vue';
import ThreeColumnsLayout from '@/components/Columns/ThreeColumnsLayout.vue';
import { columnsCounter } from '@/Utils/columnsCounter';
const props = defineProps(['photos']);

const count = columnsCounter(3);
</script>
