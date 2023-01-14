<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarItem from '@/components/NavbarItem/NavbarItem.vue';
import MobileMenu from '@/components/MobileMenu/MobileMenu.vue';
import FooterItem from '@/components/Footer/FooterItem.vue';
</script>

<template>
  <NavbarItem />
  <main class="main" id="main" tabindex="-1">
    <div class="wrapper">
      <router-view v-slot="{ Component, route }">
        <transition name="fade">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </main>
  <FooterItem />
  <MobileMenu />
</template>

<style>
/* @import '@/styles/base.css'; */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
