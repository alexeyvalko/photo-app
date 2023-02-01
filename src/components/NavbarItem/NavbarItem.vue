<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { MENU_LINKS } from '@/common/config';
import SearchForm from '@/components/SearchForm/SearchForm.vue';
import HamburgerButton from '@/components/MobileMenu/HamburgerButton.vue';
</script>

<template>
  <header class="navbar-container">
    <a class="skip-link" href="#main">Skip to main content</a>
    <nav class="wrapper navbar">
      <div class="navbar__left">
        <RouterLink to="/" class="logo">
          <img
            class="logo_img"
            alt="logo"
            src="@/assets/logo.svg"
            width="40"
            height="40"
          />
          <span class="visually-hidden">Home page</span>
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
  </header>
</template>

<style scoped>
.logo {
  line-height: 0;
}

.logo_img {
  transition: filter 0.3s linear;
}
.logo_img:hover {
  filter: drop-shadow(0 0 1.8rem var(--primary-color-light));
}

.navbar {
  padding: 0 calc(var(--column-gutter) / 2);
}

.navigation,
.navbar__left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.navigation {
  max-width: 300px;
  flex-wrap: wrap;
}

.navbar__left {
  gap: var(--navigation-gap);
  flex: 1;
}
.navbar-container {
  position: fixed;
  z-index: var(--z-index-header);
  top: 0;
  right: 0;
  left: 0;
  height: var(--navbar-height);
  background-color: var(--color-background-header);
  backdrop-filter: blur(7px);
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
