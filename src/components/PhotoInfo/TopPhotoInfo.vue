<template>
  <div class="top-info">
    <div class="author-info">
      <div class="author-avatar">
        <img
          width="64"
          height="64"
          :src="props.photo.user.profile_image.large"
          :alt="`${props.photo.user.name} avatar.`"
        />
      </div>
      <div class="author-name">{{ props.photo.user.name }}</div>
    </div>
    <a
      :href="`${props.photo.urls.raw}&dl=${props.photo.user.username}-${props.photo.id}.jpg`"
      :download="`${props.photo.user.username}-${props.photo.id}.jpg`"
      rel="nofollow"
      ><button
        class="button download-button"
        @click="() => store.trackDownloadPhoto()"
      >
        Free download
      </button></a
    >
  </div>
</template>

<script setup lang="ts">
import { usePhotoStore } from '@/stores/photo';
import type { Photo } from '@/types/photos';

const props = defineProps<{
  photo: Photo;
}>();
const store = usePhotoStore();
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
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-heading);
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

@media screen and (max-width: 768px) {
  .download-button {
    padding: 8px 12px;
  }
  .author-avatar {
    width: 50px;
    height: 50px;
  }
  .top-info {
    justify-content: center;
  }
}
</style>
