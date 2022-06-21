<template>
  <div class="skeleton-card"></div>
</template>

<style>
.skeleton-card {
  width: 100%;
  height: 100%;
  padding-top: calc(100% / 1.2);
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
