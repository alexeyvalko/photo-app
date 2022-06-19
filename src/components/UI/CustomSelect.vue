<template>
  <div class="select-container">
    <button class="select-button" @click.stop="toggleOptions">
      <span class="button-text">{{ props.currentOption }}</span>
      <span class="button-icon">
        <IconSmallArrow class="arrow-icon" :class="{ rotate: showOptions }" />
      </span>
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

const handleDocumentClick = (): void => {
  showOptions.value = false;
  document.removeEventListener('click', handleDocumentClick);
};
const toggleOptions = () => {
  showOptions.value = !showOptions.value;
  if (showOptions.value) {
    document.addEventListener('click', handleDocumentClick);
  } else {
    document.removeEventListener('click', handleDocumentClick);
  }
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
.select-container:hover {
  border: 1px solid var(--color-border-hover);
}

.select-button {
  text-transform: capitalize;
  padding: 0 20px;
  color: var(--color-text);
  border: none;
  background: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.button-text {
  font-size: 1.6rem;
  font-weight: 600;
}

.select-options {
  display: block;
  visibility: hidden;
  overflow: hidden;
  border: 1px solid var(--color-border);
  position: absolute;
  top: 55px;
  right: 0;
  opacity: 0;
  border-radius: 5px;
  z-index: 0;
  background: var(--color-background);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transform: translate3d(50px, -50px, 0px) scale(0.5);
  transition: transform 0.3s cubic-bezier(0.24, 0.22, 0.015, 1.56),
    opacity 0.1s ease-in-out;
  min-width: max-content;
  width: 100%;
}

.show-options {
  visibility: visible;
  transform: translate3d(0px, 0px, 0px) scale(1);
  z-index: 100;
  opacity: 1;
}
.select-option {
  border-radius: 5px;
  padding: 10px 22px;
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

.arrow-icon {
  width: 12px;
  height: 12px;
  fill: var(--color-border-hover);
  transition: all 0.2s linear;
}

.button-icon {
  line-height: 0;
}

.rotate {
  transform: rotate(180deg);
}
</style>
