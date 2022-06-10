<script setup lang="ts">
import { ref } from 'vue';

const isFocused = ref(false);
const searchQuery = ref('');
</script>

<template>
  <form @submit.prevent class="search-form">
    <div class="search-container" :class="{ active: isFocused }">
      <input
        autocomplete="off"
        class="search-input"
        type="text"
        placeholder="Search"
        v-model="searchQuery"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <button class="button search-button">
        <IconSearch />
      </button>
    </div>
  </form>
</template>

<style scoped>
.search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
  padding-left: 15px;
  cursor: pointer;
  height: 100%;
  height: 50px;
}
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
  transition: all 0.3s linear;
}

.active {
  border: 1px solid var(--color-border-hover);
  background: var(--search-background-active);
}

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
