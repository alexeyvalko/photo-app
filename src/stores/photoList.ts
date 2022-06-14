import { SERVER_URL } from '@/common/config';
import type { PhotoBasic } from '@/types/photos';
import { filterPhotosByColumn } from '@/utils';
import type { IResponsePhotos } from '@/types/types';
import axios from 'axios';
import { defineStore } from 'pinia';

export const usePhotoListStore = defineStore({
  id: 'photos',
  state: () => ({
    photos: [] as PhotoBasic[],
    isPhotoLIstLoading: false,
  }),

  getters: {
    filteredByThreeColumn: (state) => {
      return {
        one: filterPhotosByColumn(state.photos, 3, 1),
        two: filterPhotosByColumn(state.photos, 3, 2),
        three: filterPhotosByColumn(state.photos, 3, 3),
      };
    },
    filteredByTwoColumn: (state) => {
      return {
        one: filterPhotosByColumn(state.photos, 2, 1),
        two: filterPhotosByColumn(state.photos, 2, 2),
      };
    },
  },

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
