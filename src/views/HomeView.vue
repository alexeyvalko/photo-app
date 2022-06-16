<script setup lang="ts">
import PhotoList from '@/components/PhotoList/PhotoList.vue';
import HeaderItem from '@/components/UI/HeaderItem.vue';
document.title = `Free Stock Photos`;
</script>

<template>
  <header class="container header-container">
    <HeaderItem class="header-title"> Free Stock Photos</HeaderItem>
    <p class="header-description">Stunning high-resolution photos</p>
  </header>
  <PhotoList />
</template>

<style>
.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
}

.header-title {
  color: transparent;
  font-weight: 700;
  font-size: 5rem;
  background: #7474bf;
  background: -webkit-linear-gradient(to left, #348ac7, #7474bf);
  background: linear-gradient(to left, #348ac7, #7474bf);
  background-clip: text;
  -webkit-background-clip: text;
}

.header-description {
  padding-top: 10px;
  font-size: 2.2rem;
}

@media (max-width: 768px) {
  .header-title {
    font-size: 3rem;
  }
  .header-description {
    padding-top: 0;
    font-size: 1.8rem;
  }
}
</style>
