<template>
  <ul class="tag-list" v-if="tags">
    <li class="tag" v-for="tag in tags" :key="tag.title">
      <router-link
        :to="`/search/photos/${encodeQuery(tag.title)}`"
        class="tag-link"
      >
        {{ tag.title }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Photo } from '@/types/photos';
import { encodeQuery } from '@/utils';
import { computed } from 'vue';

const props = defineProps<{
  photo: Photo;
}>();
const tags = computed(
  () => props.photo.tags.length && props.photo.tags.slice(0, 10),
);
</script>

<style scoped>
.tag-list {
  padding: var(--column-gutter) 0 0 0;
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
  background: var(--color-background);
  border-radius: 5px;
  transition: var(--primary-transition);
  cursor: pointer;
}

.tag:hover {
  background: var(--color-background-mute);
}

.tag-link {
  display: block;
  font-size: 1.6rem;
  line-height: 1.2;
  padding: 7px 20px 10px 20px;
  text-decoration: none;
  color: var(--color-text);
}
</style>
