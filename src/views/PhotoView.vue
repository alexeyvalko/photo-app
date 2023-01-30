<script setup lang="ts">
import { usePhotoStore } from '@/stores/photo';
import { onBeforeMount, watch } from 'vue';
import { useRoute } from 'vue-router';
import TopPhotoInfo from '@/components/PhotoInfo/TopPhotoInfo.vue';
import BottomInfo from '@/components/PhotoInfo/BottomInfo.vue';
import PhotoItem from '@/components/PhotoInfo/PhotoItem.vue';
import PhotoDescription from '@/components/PhotoInfo/PhotoDescription.vue';
import PhotoTags from '../components/PhotoInfo/PhotoTags.vue';
import RecommendPhotos from '@/components/PhotoInfo/RecommendPhotos.vue';
import { capitalizeFirstLetter } from '@/utils';
import { DEFAULT_TITLE } from '@/common/config';

const store = usePhotoStore();
const route = useRoute();
const photoId = route.params.photoId as string;

const getDocumentTitle = () => {
  if (store.currentPhoto) {
    const description =
      store.currentPhoto?.alt_description ||
      store.currentPhoto?.tags[0]?.title ||
      'Stock';
    return capitalizeFirstLetter(
      `${description} photo by ${store.currentPhoto?.user.name} - ${DEFAULT_TITLE}`,
    );
  }
  return capitalizeFirstLetter(DEFAULT_TITLE);
};
const updateTitle = () => {
  const newTitle = getDocumentTitle();
  if (newTitle !== document.title) {
    document.title = newTitle;
  }
};

watch(() => store.currentPhoto, updateTitle);

onBeforeMount(() => {
  store.fetchPhoto(photoId);
  updateTitle();
});
</script>

<template>
  <div class="photo-wrapper" v-if="store.currentPhoto">
    <div class="container">
      <TopPhotoInfo :photo="store.currentPhoto" />
    </div>
    <PhotoItem :photo="store.currentPhoto" />
    <div class="container">
      <PhotoDescription :photo="store.currentPhoto" />
      <BottomInfo :photo="store.currentPhoto" :is-loading="store.isLoading" />
      <PhotoTags :photo="store.currentPhoto" v-if="store.currentPhoto.tags" />
      <RecommendPhotos
        :photo="store.currentPhoto"
        :is-loading="store.isLoading"
      />
    </div>
  </div>

  <section
    class="header-container"
    v-if="!store.currentPhoto && !store.isLoading"
  >
    <h2>Not Found</h2>
  </section>
</template>

<style scoped>
.photo-wrapper {
  padding: 20px 0;
}
</style>
