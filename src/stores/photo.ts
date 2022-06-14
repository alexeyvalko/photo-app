import { SERVER_URL } from '@/common/config';
import type { PhotoBasic } from '@/types/photos';
import { filterPhotosByColumn } from '@/utils';
import type { IResponsePhotos } from '@/types/types';
import axios from 'axios';
import { defineStore } from 'pinia';
import type { OrderByListType } from '@/types/helpers';

export const usePhotoStore = defineStore({
  id: 'photos',
  state: () => ({
    searchQuery: '',
    page: 1,
    perPage: 30,
    orderBy: 'latest' as OrderByListType,
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
    async fetchPhotos() {
      try {
        this.isPhotoLIstLoading = true;
        const response = await axios.get<IResponsePhotos<PhotoBasic>>(
          `${SERVER_URL}/latest`,
          {
            params: {
              page: this.page,
              per_page: this.perPage,
              order_by: this.orderBy,
            },
          },
        );
        this.photos = [...this.photos, ...response.data.results];
      } catch {
        console.error('Failed to fetch latest photos');
      } finally {
        this.isPhotoLIstLoading = false;
      }
    },

    async loadPosts() {
      if (this.photos.length > 0) {
        this.page += 1;
        await this.fetchPhotos();
      }
    },
  },
});
