<template>
  <div class="select-container">
    <button
      class="select-button"
      @click.stop="toggleOptions"
      :aria-expanded="showOptions"
      :aria-controls="`content${hashId}`"
    >
      <span class="button-text">{{ currentOption }}</span>
      <span class="button-icon">
        <IconSmallArrow class="arrow-icon" :class="{ rotate: showOptions }" />
      </span>
    </button>
    <Transition name="fade" :duration="{ enter: 300, leave: 300 }">
      <div
        class="select-options"
        :id="`content${hashId}`"
        ref="menuOptions"
        v-show="showOptions"
      >
        <button
          class="button select-option"
          v-for="[key, value] in colors"
          :key="key"
          @click="handleOptionClick(key)"
        >
          <span class="select-option-text">{{ value }}</span>
        </button>
        <div class="colors-subtitle">Tones</div>
        <div class="tones-wrapper">
          <button
            class="button tone"
            v-for="[toneName, color] in tones"
            :key="toneName"
            @click="handleOptionClick(toneName)"
            :style="`background-color: ${color}`"
          >
            <span class="visually-hidden">{{ toneName }}</span>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import type { IColorsOptions } from '@/types/interfaces';
import { computed } from '@vue/reactivity';
import type * as focusTrap from 'focus-trap';
import { createFocusTrap, hashFromString } from '@/utils';

const props = defineProps<{
  options: IColorsOptions;
  currentOption: string;
}>();

const hashId = hashFromString(props.currentOption);
const colors = computed(() => Object.entries(props.options.colors));
const tones = computed(() => Object.entries(props.options.tones));
const currentOption = computed(() => props.currentOption.replace(/_/g, ' '));
const menuOptions = ref<HTMLElement | null>(null);
const emit = defineEmits(['changeOption']);
const showOptions = ref(false);
let focusTrapObj: focusTrap.FocusTrap | null = null;

onMounted(() => {
  if (menuOptions.value) focusTrapObj = createFocusTrap(menuOptions.value);
});

// watch(menuOptions, (container) => {
//   if (container) {
//     focusTrapObj = createFocusTrap(container);
//     focusTrapObj?.activate();
//   } else {
//     focusTrapObj = null;
//   }
// });

const handleDocumentClick = (): void => {
  showOptions.value = false;
  document.removeEventListener('click', handleDocumentClick);
  focusTrapObj?.deactivate();
};

const toggleOptions = () => {
  showOptions.value = !showOptions.value;
  if (showOptions.value) {
    focusTrapObj?.activate();
    document.addEventListener('click', handleDocumentClick);
  } else {
    document.removeEventListener('click', handleDocumentClick);
  }
};

const handleOptionClick = (option: string) => {
  focusTrapObj?.deactivate();
  showOptions.value = false;
  emit('changeOption', option);
};
</script>

<style scoped>
.colors-subtitle {
  border-top: 1px solid var(--color-border);
  padding-top: 10px;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-heading);
  text-align: center;
}
.tones-wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  grid-gap: 10px;
  padding: 20px;
}

.tone {
  cursor: pointer;
  border: 1px solid var(--color-border);
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.select-container {
  position: relative;
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
  display: flex;
  flex-direction: column;
  visibility: visible;
  z-index: 100;
  opacity: 1;
  border: 1px solid var(--color-border);
  position: absolute;
  top: 55px;
  right: 0;
  border-radius: 5px;
  background: var(--color-background);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transform-origin: top right;
  transform: scale(1);
  transition: transform 0.3s cubic-bezier(0.24, 0.22, 0.015, 1.56),
    opacity 0.1s linear;
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
  text-align: left;
  border-radius: 5px;
  padding: 12px 22px;
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

.fade-leave-to {
  transition: transform 0.3s cubic-bezier(0.24, 0.22, 0.015, 1.56),
    opacity 0.15s linear 0.05s;
}
.fade-leave-to,
.fade-enter-from {
  transform: scale(0.2);
  opacity: 0;
}
</style>
