<template>
  <div
    class="photo-card"
    :style="`background-color: ${props.photo.color}; aspect-ratio: ${props.photo.width} / ${props.photo.height}`"
    :class="{ ['full-height']: props.fullHeight }"
  >
    <PhotoCardItem :photo="props.photo" />
  </div>
</template>

<script setup lang="ts">
import type { Photo } from '@/types/photos';
import PhotoCardItem from '@/components/PhotoCard/PhotoCardItem.vue';

const props = defineProps<{
  photo: Photo;
  fullHeight?: boolean;
}>();
</script>

<style scoped>
.photo-card {
  overflow: hidden;
  width: 100%;
  position: relative;
  border-radius: var(--card-border-radius);
}

.full-height {
  height: 100%;
}

@media (hover: hover) {
  .photo-card:hover .overlay {
    opacity: 1;
  }
}
</style>
