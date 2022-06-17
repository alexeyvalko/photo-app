<template>
  <div class="select-container">
    <button class="select-button" @click="toggleOptions">
      {{ props.currentOption }}
    </button>
    <div class="select-options" :class="{ 'show-options': showOptions }">
      <div
        class="select-option"
        v-for="option in props.options"
        :key="option"
        @click="handleOptionClick(option)"
      >
        <span class="select-option-text">{{ option }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/runtime-dom';

const props = defineProps<{
  options: string[];
  currentOption: string;
}>();

const emit = defineEmits(['changeOption']);
const showOptions = ref(false);

const toggleOptions = () => {
  showOptions.value = !showOptions.value;
};

const handleOptionClick = (option: string) => {
  showOptions.value = false;
  emit('changeOption', option);
};
</script>

<style scoped>
.select-container {
  display: inline-block;
  border: 1px solid var(--color-border);
  padding: 5px;
  background: var(--color-background);
  border-radius: 5px;
  height: 50px;
  transition: var(--primary-transition);
  font-size: 1.6rem;
}

.select-button {
  text-transform: capitalize;
  padding: 0 20px;
  color: var(--color-text);
  font-size: 1.6rem;
  font-weight: 600;
  border: none;
  background: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.select-options {
  display: block;
  overflow: hidden;
  border: 1px solid var(--color-border);
  position: absolute;
  top: 55px;
  right: 0;
  opacity: 0;
  border-radius: 5px;
  z-index: 0;
  background: var(--color-background);
  box-shadow: -4px 4px 11px -1px rgba(34, 60, 80, 0.19);
  transition: all 0.2s ease;
}

.show-options {
  z-index: 100;
  opacity: 1;
}
.select-option {
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.select-option:hover {
  background: var(--color-background-mute);
}

.select-option-text {
  text-transform: capitalize;
  color: var(--color-text);
  font-size: 1.6rem;
  font-weight: 600;
  padding: 5px;
}
</style>
