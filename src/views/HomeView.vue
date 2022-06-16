<script setup lang="ts">
import PhotoList from '@/components/PhotoList/PhotoList.vue';
import HeaderItem from '@/components/UI/HeaderItem.vue';
document.title = `Free Stock Photos`;
</script>

<template>
  <div class="container">
    <HeaderItem> Free Stock Photos</HeaderItem>
  </div>
  <PhotoList />
</template>
