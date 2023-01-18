<template>
  <div
    class="photo-card"
    :style="`background-color: ${props.photo.color}; aspect-ratio: ${props.photo.width} / ${props.photo.height}`"
  >
    <PhotoCardItem :photo="props.photo" />
  </div>
</template>

<script setup lang="ts">
import type { Photo } from '@/types/photos';
import PhotoCardItem from '@/components/PhotoCard/PhotoCardItem.vue';

const props = defineProps<{
  photo: Photo;
}>();
</script>

<style scoped>
.photo-card {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: var(--card-border-radius);
}

@media (hover: hover) {
  .photo-card:hover .overlay {
    opacity: 1;
  }
}
</style>
