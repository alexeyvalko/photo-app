import { SERVER_URL } from '@/common/config';
import type { PhotoBasic } from '@/types/photos';
import type { IResponsePhotos } from '@/types/types';
import axios from 'axios';
import { defineStore } from 'pinia';

export const usePhotoListStore = defineStore({
  id: 'photos',
  state: () => ({
    photos: [] as PhotoBasic[],
    isPhotoLIstLoading: false,
  }),
  actions: {
    async fetchLatestPhotos() {
      try {
        this.isPhotoLIstLoading = true;
        const response = await axios.get<IResponsePhotos<PhotoBasic>>(
          `${SERVER_URL}/latest`,
        );
        this.photos = response.data.results;
      } catch {
        console.error('Failed to fetch latest photos');
      } finally {
        this.isPhotoLIstLoading = false;
      }
    },
  },
});
