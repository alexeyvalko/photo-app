<template>
  <div class="bottom-wrapper">
    <div class="bottom-info" v-if="!props.isLoading">
      <div class="info-container">
        <div
          class="info-item location-info"
          @click="
            router.push({
              name: 'search',
              params: { query: props.photo.location.title },
            })
          "
          v-if="props.photo.location && props.photo.location.title"
        >
          <IconLocation class="info-icon" />
          <span class="info-text"> {{ props.photo.location.title }}</span>
        </div>
        <div class="info-item">
          <IconCalendar class="info-icon" />
          Published on
          <span class="info-text">
            {{
              new Date(props.photo.created_at).toLocaleString(lang, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }}
          </span>
        </div>
        <div class="info-item">
          <IconResolution class="info-icon resolution-icon" />

          <span class="info-text">
            {{ props.photo.width + 'x' + props.photo.height }}
          </span>
        </div>
      </div>
      <div class="info-container" v-if="props.photo.views">
        <div class="info-item">
          <IconView class="info-icon" />{{
            props.photo?.views?.toLocaleString()
          }}
        </div>
        <div class="info-item">
          <IconDownload class="info-icon download-icon" />
          <span class="info-text">{{
            props.photo?.downloads?.toLocaleString()
          }}</span>
        </div>
      </div>
    </div>
    <BottomInfoSkeleton v-if="props.isLoading" />
  </div>
</template>

<script setup lang="ts">
import type { Photo } from '@/types/photos';
import { getNavigatorLanguage } from '@/utils';
import { useRouter } from 'vue-router';
import BottomInfoSkeleton from '@/components/Skeleton/BottomInfoSkeleton.vue';
const router = useRouter();
const props = defineProps<{
  photo: Photo;
  isLoading: boolean;
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

  transition: all 0.3s ease;
}

.download-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

.resolution-icon {
  margin-left: -2px;
  width: 24px;
  height: 24px;
}

.location-info {
  cursor: pointer;
}

.location-info:hover .info-icon {
  opacity: 0.9;
  fill: var(--primary-color);
  transform: translate(0, -2px);
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
