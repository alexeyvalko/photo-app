<template>
  <div
    class="image-wrapper"
    :style="{
      maxWidth: props.photo.width / props.photo.height > 1 ? '100vh' : '50vh',
    }"
  >
    <div
      class="image-container"
      :style="`aspect-ratio: ${props.photo.width} / ${props.photo.height}`"
    >
      <LoaderItem position="center" v-if="!imageLoaded" />
      <img
        v-show="imageLoaded"
        @load="onLoad"
        :src="props.photo.urls.regular"
        :width="`${props.photo.width}`"
        :height="`${props.photo.height}`"
        :srcset="`${props.photo.urls.small_s3} 100w, ${props.photo.urls.thumb} 200w, ${props.photo.urls.small} 400w, ${props.photo.urls.medium} 600w, ${props.photo.urls.regular}  1024w, ${props.photo.urls.full} 1200w`"
        sizes="(max-width: 480px) calc(100vw - 60px) (max-width: 768px) calc(100vw - 120px), (max-width: 1200px) calc(100vw - 300px) (max-width: 1920px) calc(100vw - 900px), calc(100vw - 900px)"
        :alt="altDescription"
        class="photo-image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Photo } from '@/types/photos';
import { computed, onUpdated, ref } from 'vue';
import LoaderItem from '../UI/LoaderItem.vue';

const props = defineProps<{
  photo: Photo;
}>();

const imageLoaded = ref(false);

const onLoad = () => (imageLoaded.value = true);

const altDescription = computed(
  () =>
    props.photo?.alt_description ||
    props.photo?.description ||
    `${props.photo?.user.name}'s photo`,
);
</script>

<style scoped>
.image-wrapper {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  min-width: 250px;
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
