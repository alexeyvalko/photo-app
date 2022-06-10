<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SearchForm from '@/components/SearchForm.vue';
</script>

<template>
  <header>
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
  </header>
</template>

<style scoped>
.navbar__right,
.navbar__left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.navbar__left {
  flex: 1;
}
.navbar-container {
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  background: #fff;
  box-shadow: 0 1px 0 #f7f7f7;
  transition: background 0.2s ease, box-shadow 0.2s ease;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 50px;
}

.navbar .link {
  font-size: 1.8rem;
}

.active-link {
  color: #0070f3;
}
</style>
