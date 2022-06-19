import { SERVER_ENDPOINTS, SERVER_URL } from '@/common/config';
import type { PhotoBasic } from '@/types/photos';
import { filterPhotosByColumn, filterPhotosByRatio } from '@/utils';
import type { IPhotoListParams, IResponsePhotos } from '@/types/interfaces';
import axios from 'axios';
import { defineStore } from 'pinia';
import type { OrderByListType } from '@/types/helpers';

export const usePhotoStore = defineStore({
  id: 'photos',
  state: () => ({
    page: 1,
    perPage: 30,
    totalPages: 1,
    orderBy: 'latest' as OrderByListType,
    photos: [] as PhotoBasic[],
    isLoading: false,
  }),

  getters: {
    filteredThreeColumnsByRatio: (state) => {
      return filterPhotosByRatio(state.photos, 3);
    },

    filteredTwoColumnsByRatio: (state) => {
      return filterPhotosByRatio(state.photos, 2);
    },

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
    async fetchPhotos<T>(endpoint: string, params: T) {
      try {
        this.isLoading = true;
        const response = await axios.get<IResponsePhotos<PhotoBasic>>(
          `${SERVER_URL}/${endpoint}`,
          {
            params,
          },
        );
        this.totalPages = response.data.total_pages;
        this.photos = [...this.photos, ...response.data.results];
      } catch {
        console.error(`Failed to fetch ${this.orderBy} photos`);
      } finally {
        this.isLoading = false;
      }
    },

    async getPhotoList() {
      this.photos = [];
      this.page = 1;
      this.fetchPhotos<IPhotoListParams>(SERVER_ENDPOINTS.PHOTOS, {
        page: this.page,
        per_page: this.perPage,
        order_by: this.orderBy,
      });
    },

    async loadPosts() {
      if (this.photos.length > 0 && this.page < this.totalPages) {
        this.page += 1;
        const params = {
          page: this.page,
          per_page: this.perPage,
          order_by: this.orderBy,
        };
        await this.fetchPhotos(SERVER_ENDPOINTS.PHOTOS, params);
      }
    },

    setOrderBy(orderBy: OrderByListType) {
      this.orderBy = orderBy;
      this.getPhotoList();
    },
  },
});
