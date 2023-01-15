<template>
  <Transition name="fade">
    <div
      class="menu-overlay"
      v-if="store.isMenuOpen"
      @click="store.toggleMenu"
      :class="{ 'is-open': store.isMenuOpen }"
    ></div>
  </Transition>
  <Transition>
    <MobileNavigation />
  </Transition>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import MobileNavigation from '@/components/MobileMenu/MobileNavigation.vue';

const store = useAppStore();
</script>

<style scoped>
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* backdrop-filter: blur(1px); */
  background: var(--color-background-overlay);
  z-index: var(--z-index-overlay);
  display: none;
}

.v-enter-active,
.v-leave-active {
  transition: transform 0.3s cubic-bezier(0.24, 0.22, 0.015, 1.56);
}

.v-enter-from,
.v-leave-to {
  transform: translateY(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@media (max-width: 768px) {
  .is-open {
    display: block;
  }
}
</style>
