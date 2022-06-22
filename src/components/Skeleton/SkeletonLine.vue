<template>
  <div class="skeleton-line"></div>
</template>

<style>
.skeleton-line {
  width: 100%;
  height: 18px;
  border-radius: var(--card-border-radius);
  background-color: var(--color-background-mute);
  background: var(--skeleton-gradient);

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
