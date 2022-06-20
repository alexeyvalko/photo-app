<template>
  <div class="container photo-wrapper">
    <div class="top-info" v-if="photo">
      <div class="author-info">
        <div class="author-avatar">
          <img
            width="64"
            height="64"
            :src="photo.user.profile_image.large"
            :alt="`${photo.user.name} avatar.`"
          />
        </div>
        <div class="author-name">{{ photo.user.name }}</div>
      </div>
      <a
        :href="`${photo.urls.raw}&dl=${photo.user.username}-${photo.id}.jpg`"
        :download="`${photo.user.username}-${photo.id}.jpg`"
        rel="nofollow"
        ><button class="button download-button">Free download</button></a
      >
    </div>
    <div
      v-if="photo"
      class="image-wrapper"
      :style="{ maxWidth: photo.width / photo.height > 1 ? '100vh' : '50vh' }"
    >
      <div
        class="image-container"
        :style="`aspect-ratio: calc(${photo.width} / ${photo.height})`"
      >
        <img
          :src="photo.urls.regular"
          :srcset="`${photo.urls.small_s3} 100w, ${photo.urls.thumb} 200w, ${photo.urls.small} 400w, ${photo.urls.medium} 600w, ${photo.urls.regular}  800w, ${photo.urls.full} 1200w`"
          sizes="(max-width: 768px) calc((100vw - 30px - 30px) / 2), (max-width: 992px) calc((100vw - 60px - 60px) / 3), calc((100vw - 60px - 60px) / 3)"
          :alt="
            `${photo.description}.` ||
            `${photo.alt_description}.` ||
            `${photo.user.name}'s photo.`
          "
          class="photo-image"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePhotoStore } from '@/stores/photo';
import { useRoute } from 'vue-router';
const store = usePhotoStore();
const route = useRoute();
const photo = store.currentPhoto;
</script>

<style scoped>
.top-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 50px;
}

.photo-wrapper {
  padding: 20px 0;
}

.download-button {
  padding: 12px 15px;
  font-size: 1.6rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  background: var(--primary-color);
  transition: background 0.5s ease;
}
.download-button:hover {
  background: var(--primary-color-hover);
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

.author-avatar {
  flex-shrink: 0;
  overflow: hidden;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
