import { defineStore } from 'pinia';

export const useImagesStore = defineStore({
  id: 'images',
  state: () => ({
    searchQuery: '',
  }),
});
