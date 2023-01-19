<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import { ref, watch } from 'vue';
const searchStore = useSearchStore();

const input = ref<HTMLInputElement | null>(null);
const props = defineProps<{
  isBlurred: boolean;
}>();

watch(
  () => props.isBlurred,
  () => {
    if (input.value && props.isBlurred) {
      input.value.blur();
    }
  },
);
</script>

<template>
  <input
    ref="input"
    autocomplete="off"
    class="search-input"
    type="search"
    placeholder="Search free photos"
    v-model="searchStore.query"
    @focus="$emit('focused', true)"
    @blur="$emit('focused', false)"
    required
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
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
}
</style>
