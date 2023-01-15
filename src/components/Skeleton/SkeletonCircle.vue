<template>
  <div class="skeleton-circle"></div>
</template>

<style>
.skeleton-circle {
  width: 18px;
  height: 18px;
  border-radius: var(--card-border-radius);
  background-color: var(--color-background-mute);
  background: var(--skeleton-gradient);
  flex-shrink: 0;
  background-size: 200% 200%;
  animation: animation 2s ease infinite;
}

@keyframes animation {
  0% {
    background-position: 80% 0%;
  }
  50% {
    background-position: 20% 100%;
  }
  100% {
    background-position: 80% 0%;
  }
}
</style>
