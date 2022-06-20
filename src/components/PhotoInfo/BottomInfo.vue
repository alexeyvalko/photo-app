<template>
  <div class="bottom-info">
    <div class="info-container">
      <div
        class="info-item"
        v-if="props.currentPhoto.location && props.currentPhoto.location.title"
      >
        <IconLocation class="info-icon" />
        <span> {{ props.currentPhoto.location.title }}</span>
      </div>
      <div class="info-item">
        <IconCalendar class="info-icon" />Published on
        {{
          new Date(props.currentPhoto.created_at).toLocaleString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
      </div>
    </div>
    <div class="info-container">
      <div class="info-item">
        <IconView class="info-icon" />{{
          props.currentPhoto?.views?.toLocaleString()
        }}
      </div>
      <div class="info-item">
        <IconDownload class="info-icon download-icon" />{{
          props.currentPhoto?.downloads?.toLocaleString()
        }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Photo } from '@/types/photos';
import IconLocation from '../icons/IconLocation.vue';
import IconView from '../icons/IconView.vue';
import IconDownload from '../icons/IconDownload.vue';
import IconCalendar from '../icons/IconCalendar.vue';

const props = defineProps<{
  currentPhoto: Photo;
}>();
</script>

<style scoped>
.info-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.info-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

.info-icon {
  width: 20px;
  height: 20px;
  fill: var(--color-text);
}

.download-icon {
  width: 16px;
  height: 16px;
}
.bottom-info {
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0;
  gap: 20px;
}

@media screen and (max-width: 768px) {
  .bottom-info {
    justify-content: flex-start;
  }
}
</style>
