<template>
  <div class="skeleton-info">
    <div class="skeleton-container">
      <div class="skeleton-item long-item"><SkeletonLine /></div>
      <div class="skeleton-item"><SkeletonLine /></div>
    </div>
    <div class="skeleton-container">
      <div class="skeleton-item"><SkeletonLine /></div>
      <div class="skeleton-item"><SkeletonLine /></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SkeletonLine from '@/components/Skeleton/SkeletonLine.vue';
</script>

<style scoped>
.skeleton-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-width: 130px;
}
.skeleton-item {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  flex: 1 1;
  overflow: hidden;
}

.skeleton-info {
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0;
  gap: 20px;
}

.long-item {
  width: 100%;
}

@media screen and (max-width: 768px) {
  .skeleton-info {
    justify-content: flex-start;
  }

  .skeleton-container {
    width: 100%;
    max-width: 100%;
  }
}
</style>
