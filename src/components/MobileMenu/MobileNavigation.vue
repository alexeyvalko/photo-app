<template>
  <div class="mobile-menu" v-if="store.isMenuOpen">
    <ul class="mobile-navigation">
      <li
        class="mobile-navigation__link"
        v-for="link in MENU_LINKS"
        :key="link.name"
      >
        <RouterLink
          :to="link.href"
          class="link"
          @click.stop="store.toggleMenu"
          >{{ link.name }}</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { MENU_LINKS } from '@/common/config';
import { useAppStore } from '@/stores/app';
const store = useAppStore();
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: max-content;
  border-radius: 15px 15px 0 0;
  background: var(--color-background);
  z-index: 102;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 20px 50px 20px;
  transform: translateY(45px);
}

.mobile-navigation {
  width: 100%;
}

.mobile-navigation__link {
  border-radius: 10px;
  width: 100%;
  list-style: none;
  margin-bottom: 10px;
}

.mobile-navigation__link .link {
  padding: 10px 20px;
  display: inline-block;
  width: 100%;
  border-radius: 10px;
}
.mobile-navigation__link:hover {
  background: var(--color-background-mute);
}

.active-link {
  color: var(--primary-color);
  background: var(--color-background-mute);
}

@media screen and (max-width: 768px) {
  .mobile-menu {
    display: flex;
  }
}
</style>
