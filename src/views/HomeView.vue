<script setup lang="ts">
import PhotoList from '@/components/PhotoList/PhotoList.vue';
import HeaderItem from '@/components/UI/HeaderItem.vue';
import CustomSelect from '@/components/UI/CustomSelect.vue';
import PhotoListSkeleton from '@/components/Skeleton/PhotoListSkeleton.vue';
import { LIST_ORDER_OPTIONS } from '@/common/config';
import { usePhotoStore } from '@/stores/photo';
import { onMounted, computed } from 'vue';

document.title = `Free Stock Photos`;

const store = usePhotoStore();
onMounted(async () => {
  if (store.photos.length === 0) {
    await store.getPhotoList();
  }
});

const threeColumns = computed(() => {
  return store.filteredThreeColumnsByRatio;
});
const twoColumns = computed(() => {
  return store.filteredTwoColumnsByRatio;
});
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <section class="header-container">
        <HeaderItem class="header-title gradient-text">
          Free stock photos
        </HeaderItem>
        <p class="header-description">Stunning high-resolution photos</p>
      </section>
      <section class="filter-container">
        <CustomSelect
          :options="LIST_ORDER_OPTIONS"
          :currentOption="store.orderBy"
          @changeOption="store.setOrderBy"
        />
      </section>
      <Transition name="fade">
        <PhotoList
          v-if="store.photos.length > 0"
          :threeColumns="threeColumns"
          :twoColumns="twoColumns"
          :loader="store.loadPosts"
        />
      </Transition>
      <Transition name="fade">
        <PhotoListSkeleton :cards="12" v-if="store.isLoading" />
      </Transition>
    </div>
  </div>
</template>

<style>
.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 10px;
}

.header-title {
  color: transparent;
  font-weight: 700;
  font-size: 6rem;
  line-height: 1.2;
}

.gradient-text {
  background: #7474bf;
  background: -webkit-linear-gradient(to left, #348ac7, #7474bf);
  background: linear-gradient(to left, #348ac7, #7474bf);
  background-clip: text;
  -webkit-background-clip: text;
}

.header-description {
  font-size: 2.5rem;
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
