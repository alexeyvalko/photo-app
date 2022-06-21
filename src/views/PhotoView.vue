<script setup lang="ts">
import { usePhotoStore } from '@/stores/photo';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import TopPhotoInfo from '@/components/PhotoInfo/TopPhotoInfo.vue';
import BottomInfo from '@/components/PhotoInfo/BottomInfo.vue';
import PhotoItem from '@/components/PhotoItem.vue';
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
      <TopPhotoInfo :photo="store.currentPhoto" />
      <PhotoItem :photo="store.currentPhoto" />
      <BottomInfo :photo="store.currentPhoto" />
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
