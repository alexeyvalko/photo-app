import type { PhotoBasic } from '@/types/photos';
import type { IResponsePhotos } from '@/types/types';
import axios from 'axios';
import { defineStore } from 'pinia';

export const usePhotosStore = defineStore({
  id: 'photos',
  state: () => ({
    searchQuery: '',
    photos: [] as PhotoBasic[],
    isPhotosLoading: false,
  }),
  actions: {
    async fetchLatestPhotos() {
      try {
        this.isPhotosLoading = true;
        const response = await axios.get<IResponsePhotos<PhotoBasic>>(
          'http://localhost:5000/latest',
        );
        this.photos = response.data.results;
      } catch {
        console.error('Failed to fetch latest photos');
      } finally {
        this.isPhotosLoading = false;
      }
    },
  },
});
