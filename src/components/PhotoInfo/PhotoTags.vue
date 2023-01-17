<template>
  <ul class="tag-list">
    <li class="tag" v-for="tag in tags" :key="tag.title">
      <a :href="`/search/photos/${tag.title}`" class="tag-link">
        {{ tag.title }}
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Photo } from '@/types/photos';

const props = defineProps<{
  photo: Photo;
}>();
const tags = props.photo.tags && props.photo.tags.slice(0, 10);
</script>

<style scoped>
.tag-list {
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.tag {
  display: inline-block;
  border: 1px solid var(--color-border);
  padding: 7px 20px 10px 20px;
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

.tag-link {
  text-decoration: none;
  color: var(--color-text);
}

</style>
