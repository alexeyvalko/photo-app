<template>
  <div class="photo-tags">
    <div
      class="tag"
      v-for="tag in props.photo.tags"
      :key="tag.title"
      @click="
        router.push({
          name: 'search',
          params: { query: tag.title },
        })
      "
    >
      {{ tag.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Photo } from '@/types/photos';
import { useRouter } from 'vue-router';

const props = defineProps<{
  photo: Photo;
}>();

const router = useRouter();
</script>

<style scoped>
.photo-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.tag {
  display: inline-block;
  border: 1px solid var(--color-border);
  padding: 8px 20px 10px 20px;
  line-height: 1.2;
  background: var(--color-background);
  border-radius: 5px;
  transition: var(--primary-transition);
  font-size: 1.6rem;
  cursor: pointer;
}
.tag:hover {
  background: var(--color-background-mute);
}
</style>
