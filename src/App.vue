<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarItem from '@/components/NavbarItem/NavbarItem.vue';
import MobileMenu from '@/components/MobileMenu/MobileMenu.vue';
import FooterItem from '@/components/Footer/FooterItem.vue';
import { DEFAULT_PAGE_TRANSITION_DURATION } from './common/config';
</script>

<template>
  <NavbarItem />
  <main class="main wrapper" id="main" tabindex="-1">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" :duration="DEFAULT_PAGE_TRANSITION_DURATION">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>

    <!-- <router-view /> -->
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
