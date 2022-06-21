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
</style>
