<template>
  <div
    class="skeleton-card"
    :style="`padding-top: calc(100% / ${ratio || 1.2});`"
  ></div>
</template>

<script setup lang="ts">
defineProps<{
  ratio: number;
}>();
</script>

<style>
.skeleton-card {
  width: 100%;
  height: 100%;
  border-radius: var(--card-border-radius);
  animation-name: animation-skeleton;
  animation-duration: 1.6s;
  animation-delay: 85ms;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.34, 0, 0.21, 1);
  background-attachment: fixed;
  background-color: hsla(0, 0%, 100%, 0.12);
  background-repeat: no-repeat;
  background-image: linear-gradient(
    120deg,
    transparent 40%,
    hsla(0, 0%, 100%, 0.12) 50%,
    transparent 60%
  );
  background-size: 100vw 100vh;
}

@keyframes animation-skeleton {
  0% {
    background-position: -66vw 0;
  }

  to {
    background-position: 66vw 0;
  }
}
</style>
