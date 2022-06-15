import { SERVER_ENDPOINTS, SERVER_URL } from '@/common/config';
import type { PhotoBasic } from '@/types/photos';
import { filterPhotosByColumn } from '@/utils';
import type { IResponsePhotos, ISearchOptions } from '@/types/interfaces';
import axios from 'axios';
import { defineStore } from 'pinia';
import type {
  SearchColorsType,
  SearchContentFilterType,
  SearchOrderType,
  SearchOrientationType,
} from '@/types/helpers';

export const useSearchStore = defineStore({
  id: 'search',
  state: () => ({
    query: '',
    pageQuery: '',
    page: 1,
    perPage: 30,
    orientation: null as SearchOrientationType | null,
    contentFilter: 'low' as SearchContentFilterType,
    color: null as SearchColorsType | null,
    orderBy: 'relevant' as SearchOrderType,
    collectionIds: [],
    lang: 'en',
    totalPages: 1,
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
    async fetchPhotos<T>(endpoint: string, params: T) {
      try {
        this.isPhotoLIstLoading = true;
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
        this.isPhotoLIstLoading = false;
      }
    },
    async loadPosts() {
      if (this.photos.length > 0 && this.page < this.totalPages) {
        this.page += 1;
        const params: ISearchOptions = {
          query: this.pageQuery,
          page: this.page,
          per_page: this.perPage,
          order_by: this.orderBy,
        };
        await this.fetchPhotos(SERVER_ENDPOINTS.SEARCH_PHOTOS, params);
      }
    },

    async searchPhotos() {
      this.photos = [];
      this.page = 1;
      await this.fetchPhotos(SERVER_ENDPOINTS.SEARCH_PHOTOS, {
        query: this.pageQuery,
        page: this.page,
        per_page: this.perPage,
        order_by: this.orderBy,
      });
    },
  },
});
