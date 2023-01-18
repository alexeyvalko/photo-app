<template>
  <section class="container">
    <h2 class="title"><span class="colored-word">Not</span> found</h2>
    <p class="description">The page you are looking for does not exist.</p>
  </section>
</template>
<script setup lang="ts">
import { DEFAULT_TITLE } from '@/common/config';

document.title = `Not found - ${DEFAULT_TITLE}`;
</script>
<style scoped>
.title {
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  line-height: 2;
}

.colored-word {
  font-weight: bold;
  color: var(--primary-color);
}

.description {
  text-align: center;
}
</style>
