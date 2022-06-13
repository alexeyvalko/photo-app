<template>
  <div class="three-columns">
    <div class="three-columns__column">
      <slot name="column-1"></slot>
    </div>
    <div class="three-columns__column">
      <slot name="column-2"></slot>
    </div>
    <div class="three-columns__column">
      <slot name="column-3"></slot>
    </div>
  </div>
</template>

<style scoped>
.three-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--column-gutter);
}

.three-columns__column {
  display: flex;
  flex-direction: column;
  gap: var(--column-gutter);
}
@media (max-width: 768px) {
  .three-columns {
    display: none;
  }
}
</style>
