<template>
  <div
    class="skeleton skeleton-card"
    :style="`padding-top: calc(100% / ${ratio || 1.2});`"
  ></div>
</template>

<script setup lang="ts">
defineProps<{
  ratio: number;
}>();
</script>

<style scoped>
.skeleton-card {
  width: 100%;
  height: 100%;
  border-radius: var(--card-border-radius);
}
</style>
