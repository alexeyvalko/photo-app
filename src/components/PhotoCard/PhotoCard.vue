<template>
  <div
    class="photo-card"
    :style="`background-color: ${props.photo.color}; aspect-ratio: ${props.photo.width} / ${props.photo.height}`"
  >
    <a href="#" class="card-link">
      <img
        :src="props.photo.urls.regular"
        :srcset="`${props.photo.urls.small_s3} 100w, ${props.photo.urls.thumb} 200w, ${props.photo.urls.small} 400w, ${props.photo.urls.medium} 600w, ${props.photo.urls.regular}  800w, ${props.photo.urls.full} 1200w, ${props.photo.urls.raw} 1600w`"
        sizes="(max-width: 768px) calc((100vw - 30px - 30px) / 2), (max-width: 992px) calc((100vw - 60px - 60px) / 3), calc((100vw - 60px - 60px) / 3)"
        :alt="
          `${props.photo.description}.` ||
          `${props.photo.alt_description}.` ||
          `${props.photo.user.name}'s photo.`
        "
        class="photo-card__image"
        loading="lazy"
      />
    </a>
    <div class="overlay">
      <div class="info-container">
        <div class="author-info">
          <div class="author-avatar">
            <img
              width="42"
              height="42"
              :src="props.photo.user.profile_image.medium"
              :alt="`${props.photo.user.name} avatar.`"
            />
          </div>
          <div class="author-name">{{ props.photo.user.name }}</div>
        </div>
        <button class="download-button">
          <a
            :href="props.photo.urls.raw"
            :download="`${props.photo.id}.jpg`"
            target="_blank"
          >
            <IconDownload class="info-icon" />
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PhotoBasic } from '@/types/photos';
undefined;

const props = defineProps<{
  photo: PhotoBasic;
}>();
</script>

<style scoped>
.info-icon {
  width: 20px;
  height: 20px;
}
.author-info {
  display: flex;
  align-items: center;
}

.author-name {
  opacity: 0.8;
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.6rem;
  color: var(--white-mute);
}

.download-button {
  background-color: var(--white-mute);
  border: none;
  padding: 0;
  margin: 0;
  font-size: 1.6rem;
  padding: 10px;
  border-radius: 10px;
  color: var(--black-mute);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info-container {
  pointer-events: all;
  padding: 0 20px 20px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
}

.author-avatar {
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.photo-card {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.photo-card__image {
  width: 100%;
  height: auto;
}

.overlay {
  pointer-events: none;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    180deg,
    #00000057 0,
    rgba(0, 0, 0, 0.338) 3.5%,
    rgba(0, 0, 0, 0.324) 7%,
    rgba(0, 0, 0, 0.306) 10.35%,
    rgba(0, 0, 0, 0.285) 13.85%,
    rgba(0, 0, 0, 0.262) 17.35%,
    rgba(0, 0, 0, 0.237) 20.85%,
    rgba(0, 0, 0, 0.213) 24.35%,
    rgba(0, 0, 0, 0.188) 27.85%,
    rgba(0, 0, 0, 0.165) 31.35%,
    rgba(0, 0, 0, 0.144) 34.85%,
    rgba(0, 0, 0, 0.126) 38.35%,
    rgba(0, 0, 0, 0.112) 41.85%,
    rgba(0, 0, 0, 0.103) 45.35%,
    #0000001a 48.85%,
    rgba(0, 0, 0, 0.103) 52.35%,
    rgba(0, 0, 0, 0.112) 55.85%,
    rgba(0, 0, 0, 0.126) 59.35%,
    rgba(0, 0, 0, 0.144) 62.85%,
    rgba(0, 0, 0, 0.165) 66.35%,
    rgba(0, 0, 0, 0.188) 69.85%,
    rgba(0, 0, 0, 0.213) 73.35%,
    rgba(0, 0, 0, 0.237) 76.85%,
    rgba(0, 0, 0, 0.262) 80.35%,
    rgba(0, 0, 0, 0.285) 83.85%,
    rgba(0, 0, 0, 0.306) 87.35%,
    rgba(0, 0, 0, 0.324) 90.85%,
    rgba(0, 0, 0, 0.338) 94.35%,
    rgba(0, 0, 0, 0.347) 97.85%,
    #00000059
  );
  transition: var(--primary-transition);
}

.photo-card:hover .overlay {
  opacity: 1;
}
</style>
