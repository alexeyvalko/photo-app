<script setup lang="ts">
import { ref } from 'vue';
import SearchButton from '@/components/SearchForm/SearchButton.vue';
import SearchInput from '@/components/SearchForm/SearchInput.vue';

const isFocused = ref(false);
const handleFocus = (newValue: boolean): void => {
  isFocused.value = newValue;
};
</script>

<template>
  <form @submit.prevent class="search-form">
    <div class="search-container" :class="{ 'active-search': isFocused }">
      <SearchInput @focused="handleFocus" />
      <SearchButton />
    </div>
  </form>
</template>

<style scoped>
.search-form {
  width: 100%;
}

.search-container {
  border: 1px solid var(--color-background-mute);
  background: var(--color-background-mute);
  border-radius: 5px;
  display: flex;
  align-items: center;
  height: 50px;
  transition: var(--primary-transition);
}

.active-search {
  border: 1px solid var(--color-border-hover);
  background: var(--search-background-active);
}
</style>
