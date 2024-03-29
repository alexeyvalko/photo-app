<script setup lang="ts">
import { usePhotoStore } from '@/stores/photo';
import { computed, onBeforeMount, watch } from 'vue';
import { useRoute } from 'vue-router';
import TopPhotoInfo from '@/components/PhotoInfo/TopPhotoInfo.vue';
import BottomInfo from '@/components/PhotoInfo/BottomInfo.vue';
import PhotoImage from '@/components/PhotoInfo/PhotoImage.vue';
import PhotoDescription from '@/components/PhotoInfo/PhotoDescription.vue';
import PhotoTags from '../components/PhotoInfo/PhotoTags.vue';
import RecommendPhotos from '@/components/PhotoInfo/RecommendPhotos.vue';
import { capitalizeFirstLetter } from '@/utils';
import { DEFAULT_TITLE } from '@/common/config';
import LoaderItem from '@/components/UI/LoaderItem.vue';

const store = usePhotoStore();
const route = useRoute();
const documentTitle = computed(() => {
  if (store.currentPhoto) {
    const description =
      store.currentPhoto.alt_description ||
      (store.currentPhoto.tags?.length && store.currentPhoto.tags[0].title) ||
      'Stock';
    return capitalizeFirstLetter(
      `${description} photo by ${store.currentPhoto?.user.name} - ${DEFAULT_TITLE}`,
    );
  }
  return capitalizeFirstLetter(DEFAULT_TITLE);
});

const updateTitle = () => {
  if (documentTitle.value !== document.title) {
    document.title = documentTitle.value;
  }
};

const watcher = () => {
  const photoId = route.params.photoId as string;
  if (photoId) {
    store.fetchPhoto(photoId).then(updateTitle);
    updateTitle();
  }
};

watch(() => route.params.photoId, watcher);

onBeforeMount(watcher);
</script>

<template>
  <div class="photo-wrapper" v-if="store.currentPhoto">
    <div class="container">
      <TopPhotoInfo :photo="store.currentPhoto" />
    </div>
    <PhotoImage :photo="store.currentPhoto" />
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
  <LoaderItem position="center" v-if="!store.currentPhoto && store.isLoading" />
  <section
    class="header-container"
    v-if="!store.currentPhoto && !store.isLoading"
  >
    <h2>Not Found</h2>
  </section>
</template>

<style scoped>
.photo-wrapper {
  padding: 30px 0;
}
</style>
