<template>
  <div class="photo-description" v-if="description">
    <h3 class="description-title">Description:</h3>
    <p>{{ capitalizeFirstLetter(description) }}</p>
  </div>
</template>

<script setup lang="ts">
import { capitalizeFirstLetter } from '@/utils';
import type { Photo } from '@/types/photos';
import { computed } from 'vue';

const props = defineProps<{
  photo: Photo;
}>();
const description = computed(
  () => props.photo.description || props.photo.alt_description,
);
</script>

<style scoped>
.photo-description {
  padding-top: 20px;
}

.description-title {
  color: var(--color-heading);
}
</style>
