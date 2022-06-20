<script setup lang="ts">
import { usePhotoStore } from '@/stores/photo';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import TopPhotoInfo from '@/components/PhotoInfo/TopPhotoInfo.vue';
import BottomInfo from '../components/PhotoInfo/BottomInfo.vue';
const store = usePhotoStore();
const route = useRoute();

onMounted(() => {
  const photoId = route.params.photoId as string;
  if (photoId) {
    store.fetchPhoto(photoId);
  }
});
</script>

<template>
  <div class="container">
    <div class="photo-wrapper" v-if="store.currentPhoto">
      <TopPhotoInfo :current-photo="store.currentPhoto" />
      <div
        class="image-wrapper"
        :style="{
          maxWidth:
            store.currentPhoto.width / store.currentPhoto.height > 1
              ? '100vh'
              : '50vh',
        }"
      >
        <div
          class="image-container"
          :style="`aspect-ratio: calc(${store.currentPhoto.width} / ${store.currentPhoto.height})`"
        >
          <img
            :src="store.currentPhoto.urls.regular"
            :srcset="`${store.currentPhoto.urls.small_s3} 100w, ${store.currentPhoto.urls.thumb} 200w, ${store.currentPhoto.urls.small} 400w, ${store.currentPhoto.urls.medium} 600w, ${store.currentPhoto.urls.regular}  800w, ${store.currentPhoto.urls.full} 1200w`"
            sizes="(max-width: 768px) calc((100vw - 30px - 30px) / 2), (max-width: 992px) calc((100vw - 60px - 60px) / 3), calc((100vw - 60px - 60px) / 3)"
            :alt="
              `${store.currentPhoto.description}.` ||
              `${store.currentPhoto.alt_description}.` ||
              `${store.currentPhoto.user.name}'s photo.`
            "
            class="photo-image"
            loading="lazy"
          />
        </div>
      </div>
      <BottomInfo :current-photo="store.currentPhoto" />
    </div>
  </div>
</template>

<style scoped>
.photo-wrapper {
  padding: 20px 0;
}

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
