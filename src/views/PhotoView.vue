<template>
  <div class="'photo-container'">
    {{ route.params.id }}
    <h2>In development</h2>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
