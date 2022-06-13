<template>
  <div
    class="photo-card"
    :style="`background-color: ${props.photo.color}; aspect-ratio: ${props.photo.width} / ${props.photo.height}`"
  >
    <a href="#">
      <img
        :src="props.photo.urls.regular"
        :srcset="`${props.photo.urls.small_s3} 100w, ${props.photo.urls.thumb} 200w, ${props.photo.urls.small} 400w, ${props.photo.urls.medium} 600w, ${props.photo.urls.regular}  800w, ${props.photo.urls.full} 1200w, ${props.photo.urls.raw} 1600w`"
        sizes="(max-width: 768px) calc((100vw - 30px - 30px) / 2), (max-width: 992px) calc((100vw - 60px - 60px) / 3), calc((100vw - 60px - 60px) / 3)"
        :alt="
          props.photo.description ||
          props.photo.alt_description ||
          'photo by ' + props.photo.user.name + '.'
        "
        class="photo-card__image"
        loading="lazy"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['photo']);
</script>

<style scoped>
.photo-card {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.photo-card__image {
  width: 100%;
  height: auto;
}
</style>
