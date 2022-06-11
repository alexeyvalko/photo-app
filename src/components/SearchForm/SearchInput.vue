<script setup lang="ts">
import { useImagesStore } from '@/stores/images';
const imagesStore = useImagesStore();
</script>

<template>
  <input
    autocomplete="off"
    class="search-input"
    type="text"
    placeholder="Search free photos"
    v-model="imagesStore.searchQuery"
    @focus="$emit('focused', true)"
    @blur="$emit('focused', false)"
  />
</template>

<style scoped>
.search-input {
  width: 100%;
  padding: 15px 4px 15px 20px;
  border: none;
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: 5px;
  background: transparent;
  outline: none;
  height: 100%;
  color: var(--color-text);
}

.search-input::placeholder {
  font-size: 1.8rem;
  font-weight: 600;
}
</style>
