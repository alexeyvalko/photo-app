<script setup lang="ts">
import PhotoList from '@/components/PhotoList/PhotoList.vue';
import HeaderItem from '@/components/UI/HeaderItem.vue';
import CustomSelect from '@/components/UI/CustomSelect.vue';
import PhotoListSkeleton from '@/components/Skeleton/PhotoListSkeleton.vue';
import { DEFAULT_TITLE, LIST_ORDER_OPTIONS } from '@/common/config';
import { usePhotoStore } from '@/stores/photo';
import { onMounted, computed } from 'vue';
import { capitalizeFirstLetter } from '@/utils';

document.title = capitalizeFirstLetter(`${DEFAULT_TITLE}`);

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
  <section class="container">
    <div class="header-container">
      <HeaderItem class="header-title gradient-text">
        Free stock photos
      </HeaderItem>
      <p class="header-description">Stunning high-resolution photos</p>
    </div>
    <div class="filter-container">
      <CustomSelect
        :options="LIST_ORDER_OPTIONS"
        :currentOption="store.orderBy"
        @changeOption="store.setOrderBy"
      />
    </div>
    <Transition name="fade">
      <PhotoList
        v-if="store.photos.length > 100000"
        :threeColumns="threeColumns"
        :twoColumns="twoColumns"
        :loader="store.loadPosts"
      />
    </Transition>
    <Transition name="fade">
      <PhotoListSkeleton :cards="12" v-if="true || store.isLoading" />
    </Transition>
  </section>
</template>

<style>
.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
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
  font-size: 3rem;
  font-weight: 600;
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
