<template>
  <div class="bottom-info">
    <div class="info-container">
      <div
        class="info-item"
        v-if="props.photo.location && props.photo.location.title"
      >
        <IconLocation class="info-icon" />
        <span class="info-text"> {{ props.photo.location.title }}</span>
      </div>
      <div class="info-item">
        <IconCalendar class="info-icon" />Published on
        <span class="info-text">{{
          new Date(props.photo.created_at).toLocaleString(lang, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}</span>
      </div>
    </div>
    <div class="info-container" v-if="props.photo.views">
      <div class="info-item">
        <IconView class="info-icon" />{{ props.photo?.views?.toLocaleString() }}
      </div>
      <div class="info-item">
        <IconDownload class="info-icon download-icon" />
        <span class="info-text">{{
          props.photo?.downloads?.toLocaleString()
        }}</span>
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
import { getNavigatorLanguage } from '@/utils';

const props = defineProps<{
  photo: Photo;
}>();

const lang = getNavigatorLanguage();
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
  flex: 1 1;
  overflow: hidden;
}

.info-text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.info-icon {
  width: 20px;
  height: 20px;
  fill: var(--color-text);
}

.download-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
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

  .info-container {
    width: 100%;
  }
}
</style>
