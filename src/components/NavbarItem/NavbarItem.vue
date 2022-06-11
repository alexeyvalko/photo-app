<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SearchForm from '@/components/SearchForm/SearchForm.vue';
</script>

<template>
  <div class="navbar-container">
    <nav class="wrapper navbar">
      <div class="navbar__left">
        <img
          alt="logo"
          class="logo"
          src="@/assets/logo.svg"
          width="40"
          height="40"
        />
        <SearchForm />
      </div>
      <div class="navbar__right">
        <RouterLink to="/" class="link">Home</RouterLink>
        <RouterLink to="/about" class="link">About</RouterLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar__right,
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
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  height: var(--navbar-height);
  background: var(---color-background);
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
</style>
