<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { MENU_LINKS } from '@/common/config';
import SearchForm from '@/components/SearchForm/SearchForm.vue';
import HamburgerButton from '@/components/MobileMenu/HamburgerButton.vue';
</script>

<template>
  <div class="navbar-container">
    <nav class="wrapper navbar">
      <div class="navbar__left">
        <RouterLink to="/" class="logo">
          <img alt="logo" src="@/assets/logo.svg" width="40" height="40" />
        </RouterLink>
        <SearchForm />
      </div>
      <ul class="navigation">
        <li
          class="navigation__link"
          v-for="link in MENU_LINKS"
          :key="link.name"
        >
          <RouterLink :to="link.href" class="link">{{ link.name }}</RouterLink>
        </li>
      </ul>

      <HamburgerButton />
    </nav>
  </div>
</template>

<style scoped>
.logo {
  line-height: 0;
}
.navigation,
.navbar__left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.navbar__left {
  gap: var(--navigation-gap);
  flex: 1;
}
.navbar-container {
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  height: var(--navbar-height);
  background-color: var(--color-background);
  box-shadow: 0 1px 0 var(--color-background-mute);
  transition: box-shadow 0.2s ease;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: var(--navigation-gap);
}

.active-link {
  color: var(--primary-color);
}

.navigation__link {
  list-style: none;
}

@media (max-width: 768px) {
  .navigation {
    display: none;
  }

  .navbar__left {
    gap: calc(var(--navigation-gap) / 3);
  }
  .navbar {
    gap: calc(var(--navigation-gap) / 3);
  }
}
</style>
