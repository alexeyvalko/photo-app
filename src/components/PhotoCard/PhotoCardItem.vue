<template>
  <RouterLink
    :to="`/photo/${props.photo.id}`"
    class="card-link"
    @click="store.setCurrentPhoto(props.photo)"
  >
    <img
      :src="props.photo.urls.regular"
      :width="`${props.photo.width}`"
      :height="`${props.photo.height}`"
      :srcset="`${props.photo.urls.small_s3} 100w, ${
        props.photo.urls.thumb
      } 200w, ${props.photo.urls.small} 400w, ${
        props.photo.urls.medium || props.photo.urls.regular
      } 600w, ${props.photo.urls.regular}  800w, ${
        props.photo.urls.full
      } 1200w`"
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
</template>

<script setup lang="ts">
import type { Photo } from '@/types/photos';
import { usePhotoStore } from '@/stores/photo';
import CardOverlay from '@/components/PhotoCard/CardOverlay.vue';
const props = defineProps<{
  photo: Photo;
}>();
const store = usePhotoStore();
</script>

<style scoped>
.photo-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-link {
  display: inline-block;
  width: 100%;
  height: 100%;
}

@media (hover: hover) {
  .card-link:hover ~ .overlay {
    opacity: 1;
    display: block;
    visibility: visible;
  }
}
</style>
