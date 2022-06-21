<template>
  <div ref="observed" class="observer"></div>
  <div ref="observerBottom" class="observer-bottom"></div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';
import { createObserver } from '@/utils';

const props = defineProps<{
  callback: () => void;
}>();

const observed = ref(null) as Ref<Element | null>;
const observerBottom = ref(null) as Ref<Element | null>;
onMounted(async () => {
  createObserver([observed.value, observerBottom.value], props.callback);
});
</script>

<style scoped>
.observer {
  position: absolute;
  width: 0;
  bottom: 30%;
  left: 0;
  height: 10px;
  opacity: 0;
}

.observer-bottom {
  position: absolute;
  width: 0;
  bottom: 10px;
  left: 0;
  height: 10px;
  opacity: 0;
}
</style>
