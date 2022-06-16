<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<style scoped>
.title {
  color: var(--color-heading);
  font-size: 4.5rem;
  font-weight: 600;
  padding: 20px 0;
}
@media (max-width: 768px) {
  .title {
    font-size: 3rem;
    padding: 10px 0;
  }
}
</style>
