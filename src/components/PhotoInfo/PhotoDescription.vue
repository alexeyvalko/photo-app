<template>
  <div
    class="photo-description"
    v-if="props.photo.description || props.photo.alt_description"
  >
    <h3 class="description-title">Description:</h3>
    <p>{{ props.photo.description || props.photo.alt_description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Photo } from '@/types/photos';

const props = defineProps<{
  photo: Photo;
}>();
</script>

<style scoped>
.photo-description {
  padding-top: 20px;
}

.description-title {
  color: var(--color-heading);
}
</style>
