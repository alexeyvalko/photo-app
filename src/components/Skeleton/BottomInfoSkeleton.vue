<template>
  <div class="skeleton-info">
    <div class="skeleton-container skeleton--left">
      <div class="skeleton-item long-item">
        <SkeletonCircle />
        <SkeletonLine />
      </div>
      <div class="skeleton-item">
        <SkeletonCircle />
        <SkeletonLine />
      </div>
    </div>
    <div class="skeleton-container skeleton--right">
      <div class="skeleton-item long-item">
        <SkeletonCircle />
        <SkeletonLine />
      </div>
      <div class="skeleton-item long-item">
        <SkeletonCircle />
        <SkeletonLine />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SkeletonLine from '@/components/Skeleton/SkeletonLine.vue';
import SkeletonCircle from './SkeletonCircle.vue';
</script>

<style scoped>
.skeleton-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
}

.skeleton--left {
  max-width: 130px;
}

.skeleton--right {
  max-width: 80px;
}
.skeleton-item {
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
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
