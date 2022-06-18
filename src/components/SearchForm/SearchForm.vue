<script setup lang="ts">
import { ref } from 'vue';
import SearchButton from '@/components/SearchForm/SearchButton.vue';
import SearchInput from '@/components/SearchForm/SearchInput.vue';
import { useSearchStore } from '@/stores/search';
import { useRouter } from 'vue-router';
import { encodeQuery } from '@/utils';

const searchStore = useSearchStore();
const router = useRouter();
const isFocused = ref(false);
const handleFocus = (newValue: boolean): void => {
  isFocused.value = newValue;
};

const handleSubmit = (): void => {
  if (searchStore.query) {
    const query = encodeQuery(searchStore.query);
    router.push(`/search/photos/${query}`);
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="search-form">
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
