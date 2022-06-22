<template>
  <div
    class="image-wrapper"
    :style="{
      maxWidth: props.photo.width / props.photo.height > 1 ? '100vh' : '50vh',
    }"
  >
    <div
      class="image-container"
      :style="`aspect-ratio: calc(${props.photo.width} / ${props.photo.height})`"
    >
      <img
        :src="props.photo.urls.regular"
        :srcset="`${props.photo.urls.small_s3} 100w, ${props.photo.urls.thumb} 200w, ${props.photo.urls.small} 400w, ${props.photo.urls.medium} 600w, ${props.photo.urls.regular}  800w, ${props.photo.urls.full} 1200w`"
        sizes="(max-width: 768px) calc((100vw - 30px - 30px) / 2), (max-width: 992px) calc((100vw - 60px - 60px) / 3), calc((100vw - 60px - 60px) / 3)"
        :alt="
          `${props.photo.alt_description}.` ||
          `${props.photo.description}.` ||
          `${props.photo.user.name}'s photo.`
        "
        class="photo-image"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Photo } from '@/types/photos';

const props = defineProps<{
  photo: Photo;
}>();
</script>

<style scoped>
.image-wrapper {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  min-width: calc(250px);
}

.image-container {
  position: relative;
  width: 100%;
}

.photo-image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: auto;
}
</style>
