<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<style>
.title {
  color: var(--color-heading);
  font-size: 4.5rem;
  font-weight: 600;
  padding: 0;
  line-height: 4.5rem;
  text-transform: capitalize;
}
@media (max-width: 768px) {
  .title {
    font-size: 3rem;
  }
}
</style>
