<template>
  <div
    class="photo-card"
    :style="`background-color: ${props.photo.color}; aspect-ratio: ${props.photo.width} / ${props.photo.height}`"
  >
    <RouterLink
      :to="`/photo/${props.photo.id}`"
      class="card-link"
      @click="store.setCurrentPhoto(props.photo)"
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
        class="photo-card__image"
        loading="lazy"
      />
    </RouterLink>
    <CardOverlay :photo="props.photo" />
  </div>
</template>

<script setup lang="ts">
import type { Photo } from '@/types/photos';
import CardOverlay from '@/components/PhotoCard/CardOverlay.vue';
import { usePhotoStore } from '@/stores/photo';

const props = defineProps<{
  photo: Photo;
}>();
const store = usePhotoStore();
</script>

<style scoped>
.photo-card {
  overflow: hidden;
  width: 100%;
  position: relative;
  border-radius: var(--card-border-radius);
}

.photo-card__image {
  width: 100%;
  height: auto;
}

.card-link {
  position: absolute;
  width: 100%;
  height: 100%;
}

@media (hover: hover) {
  .photo-card:hover .overlay {
    opacity: 1;
  }
}
</style>
