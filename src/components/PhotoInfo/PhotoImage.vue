<template>
  <div
    @click="zoomInOutImage"
    class="image-wrapper"
    :class="{ zoom_out: imageZoomed }"
    :style="{
      maxWidth: imageZoomed
        ? '100%'
        : props.photo.width / props.photo.height > 1
        ? '100vh'
        : '50vh',
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
        :src="props.photo.urls.full"
        :width="`${props.photo.width}`"
        :height="`${props.photo.height}`"
        :srcset="`${props.photo.urls.small} 400w, ${props.photo.urls.medium} 600w, ${props.photo.urls.regular}  1024w, ${props.photo.urls.full} 1200w`"
        sizes="(max-width: 480px) calc(100vw - 60px) (max-width: 768px) calc(100vw - 120px), (max-width: 1200px) calc(100vw - 300px) (max-width: 1920px) calc(100vw - 900px), calc(100vw - 900px)"
        :alt="altDescription"
        class="photo-image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Photo } from '@/types/photos';
import { computed, ref, watch } from 'vue';
import LoaderItem from '../UI/LoaderItem.vue';

const props = defineProps<{
  photo: Photo;
}>();

const imageLoaded = ref(false);
const imageZoomed = ref(false);

const onLoad = () => (imageLoaded.value = true);

const zoomInOutImage = () => {
  imageZoomed.value = !imageZoomed.value;
};

const altDescription = computed(
  () =>
    props.photo?.alt_description ||
    props.photo?.description ||
    `${props.photo?.user.name}'s photo`,
);

watch(
  () => props.photo,
  () => {
    imageZoomed.value = false;
  },
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
  cursor: zoom-in;
}

.zoom_out {
  cursor: zoom-out;
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
