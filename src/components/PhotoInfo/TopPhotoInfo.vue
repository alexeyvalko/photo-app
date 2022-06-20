<template>
  <div class="top-info">
    <div class="author-info">
      <div class="author-avatar">
        <img
          width="64"
          height="64"
          :src="props.currentPhoto.user.profile_image.large"
          :alt="`${props.currentPhoto.user.name} avatar.`"
        />
      </div>
      <div class="author-name">{{ props.currentPhoto.user.name }}</div>
    </div>
    <a
      :href="`${props.currentPhoto.urls.raw}&dl=${props.currentPhoto.user.username}-${props.currentPhoto.id}.jpg`"
      :download="`${props.currentPhoto.user.username}-${props.currentPhoto.id}.jpg`"
      rel="nofollow"
      ><button class="button download-button">Free download</button></a
    >
  </div>
</template>

<script setup lang="ts">
import type { PhotoBasic } from '@/types/photos';

const props = defineProps<{
  currentPhoto: PhotoBasic;
}>();
</script>

<style scoped>
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
.top-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 20px;
  gap: 20px;
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
