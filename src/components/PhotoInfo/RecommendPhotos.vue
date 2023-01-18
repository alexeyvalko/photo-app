<template>
  <section class="recommend" v-if="photos && !isLoading">
    <h2 class="recommend__heading">You may also like</h2>
    <ul class="recommend__list">
      <li
        v-for="photo in photos"
        :key="photo.id + 'recommend'"
        class="list_item"
      >
        <PhotoCardRecommend :photo="photo" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Photo } from '@/types/photos';
import PhotoCardRecommend from '@/components/PhotoCard/PhotoCardRecommend.vue';
import { computed } from 'vue';

const props = defineProps<{
  photo: Photo;
  isLoading: boolean;
}>();

const photos = computed(() => {
  if (props.photo.related_collections) {
    return props.photo.related_collections.results.map(
      ({ cover_photo }) => cover_photo,
    );
  }
  return null;
});
</script>

<style scoped>
.recommend {
  margin-bottom: var(--column-gutter);
  padding: 0 10px;
}
.recommend__list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--column-gutter);
  list-style: none;
  padding: 0;
}

.list_item {
  overflow: hidden;
  display: flex;
  align-items: start;
  justify-content: center;
  max-height: 500px;
}

.recommend__heading {
  text-align: center;
  padding: var(--column-gutter) 0;
}

@media screen and (max-width: 768px) {
  .recommend__list {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 412px) {
  .recommend__list {
    grid-template-columns: 1fr;
  }
}
</style>
