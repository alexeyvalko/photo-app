<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isFocused = ref(false);
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
          <form @submit.prevent class="search-form">
            <div class="search-container" :class="{ active: isFocused }">
              <input
                class="search-input"
                type="text"
                placeholder="Search"
                @focus="isFocused = true"
                @blur="isFocused = false"
              />
              <button class="button search-button">
                <IconSearch />
              </button>
            </div>
          </form>
        </div>
        <div class="navbar__right">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.button {
  border: none;
  background: none;
  cursor: pointer;
}

.search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 15px;
  padding-left: 15px;
  cursor: pointer;
  height: 100%;
  height: 50px;
}
.search-form {
  width: 100%;
}
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
.search-container {
  border: 1px solid #f7f7f7;
  background: #f7f7f7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  color: #7f7f7f;
  height: 50px;
}

.active {
  border: 1px solid #a2a2a2;
  background: #ffffff;
  color: #323232;
}

.search-input {
  width: 100%;
  padding: 15px 4px 15px 20px;
  border: none;
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: 5px;
  background: transparent;
  outline: none;
  height: 100%;
}

.search-input::placeholder {
  font-size: 1.8rem;
  font-weight: 600;
}
</style>
