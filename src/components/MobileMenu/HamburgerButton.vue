<template>
  <div
    class="hamburger"
    @click="store.toggleMenu"
    :class="{ crest: store.isMenuOpen }"
  >
    <div class="hamburger-line"></div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';

const store = useAppStore();
</script>

<style scoped>
.hamburger {
  cursor: pointer;
  position: relative;
  width: 31px;
  height: 25px;
  z-index: 15;
  display: none;
}

.hamburger-line {
  display: block;
  width: 31px;
  height: 3px;
  position: relative;
  background: var(--color-text);
  border-radius: 5px;
  z-index: 2;
  transform-origin: 4px 0px;
  transition: all 0.3s ease-in-out;
}

.hamburger-line::after {
  width: 31px;
  height: 3px;
  background: var(--color-text);
  position: absolute;
  content: '';
  top: 8px;
  left: 0;
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;
}

.hamburger-line::before {
  width: 31px;
  height: 3px;
  background: var(--color-text);
  position: absolute;
  content: '';
  bottom: 8px;
  left: 0;
  z-index: 2;
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;
}

.hamburger.crest > .hamburger-line {
  width: 0;
}
.hamburger.crest > .hamburger-line::before {
  background: var(--color-text);
  transform: rotate(45deg) translate(0px, 11px);
}
.hamburger.crest > .hamburger-line::after {
  background: var(--color-text);
  transform: rotate(-45deg) translate(0px, -11px);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
    align-items: center;
  }
}
</style>
