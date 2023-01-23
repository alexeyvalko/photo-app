<template>
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
      <a
        role="button"
        :href="`${props.photo.urls.raw}&dl=${props.photo.user.username}-${props.photo.id}.jpg`"
        :download="`${props.photo.user.username}-${props.photo.id}.jpg`"
        rel="nofollow"
      >
        <span class="download-button">
          <IconDownload class="info-icon" />
          <span class="visually-hidden">
            Download {{ props.photo.alt_description }} photo by
            {{ props.photo.user.name }}
          </span>
        </span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PhotoBasic } from '@/types/photos';

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
  max-width: calc(100% - 40px - 20px - 5px);
}

.author-name {
  opacity: 0.8;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--white-mute);
}

.download-button {
  flex-shrink: 0;
  background-color: var(--white-mute);
  border: none;
  margin: 0;
  font-size: 1.6rem;
  line-height: 0;
  padding: 10px;
  border-radius: 50%;
  color: var(--black-mute);
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-shrink: 0;
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
  flex-shrink: 0;
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  display: none;
  visibility: hidden;
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

@media (hover: hover) {
  .overlay {
    opacity: 0;
    display: block;
    visibility: visible;
  }
  .overlay:hover {
    opacity: 1;
    display: block;
    visibility: visible;
  }
}
</style>
