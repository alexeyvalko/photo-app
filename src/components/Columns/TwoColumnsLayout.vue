<template>
  <div class="two-columns">
    <div class="two-columns__column">
      <slot name="column-1"></slot>
    </div>
    <div class="two-columns__column">
      <slot name="column-2"></slot>
    </div>
  </div>
</template>

<style scoped>
.two-columns {
  display: none;
}

.two-columns__column {
  display: flex;
  flex-direction: column;
  gap: calc(var(--column-gutter) / 2);
}
@media (max-width: 1024px) {
  .two-columns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: calc(var(--column-gutter) / 2);
  }
}
</style>
