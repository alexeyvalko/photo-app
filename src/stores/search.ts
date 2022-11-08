import {
  DEFAULT_ORIENTATION_OPTION,
  SERVER_ENDPOINTS,
  SERVER_URL,
} from '@/common/config';
import type { Photo } from '@/types/photos';
import { deleteFalsyKeys, filterPhotosByRatio } from '@/utils';
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
    pageParam: '',
    page: 1,
    perPage: 30,
    orientation: null as SearchOrientationType | null,
    contentFilter: 'high' as SearchContentFilterType,
    color: null as SearchColorsType | null,
    orderBy: null as SearchOrderType | null,
    collectionIds: [],
    lang: 'en',
    totalPages: 1,
    photos: [] as Photo[],
    isLoading: false,
  }),

  getters: {
    pageQueries: (state) => {
      const queries = {
        orientation: state.orientation,
        color: state.color,
        order_by: state.orderBy,
      };
      const filteredQueries = deleteFalsyKeys(queries);
      return filteredQueries;
    },

    filteredThreeColumnsByRatio: (state) => {
      return filterPhotosByRatio(state.photos, 3);
    },

    filteredTwoColumnsByRatio: (state) => {
      return filterPhotosByRatio(state.photos, 2);
    },
  },

  actions: {
    async fetchPhotos<T extends Record<string, unknown>>(
      endpoint: string,
      params: T,
    ) {
      try {
        const filteredParams = deleteFalsyKeys(
          params,
        ) as unknown as ISearchOptions;
        this.isLoading = true;
        const response = await axios.get<IResponsePhotos<Photo>>(
          `${SERVER_URL}/${endpoint}`,
          {
            params: filteredParams,
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
    async loadPosts() {
      if (this.photos.length > 0 && this.page < this.totalPages) {
        this.page += 1;
        const params: ISearchOptions = {
          query: this.pageParam,
          page: this.page,
          per_page: this.perPage,
          order_by: this.orderBy,
          orientation: this.orientation,
        };

        await this.fetchPhotos(SERVER_ENDPOINTS.SEARCH_PHOTOS, params);
      }
    },

    async searchPhotos() {
      this.photos = [];
      this.page = 1;
      await this.fetchPhotos(SERVER_ENDPOINTS.SEARCH_PHOTOS, {
        query: this.pageParam,
        page: this.page,
        per_page: this.perPage,
        order_by: this.orderBy,
        orientation: this.orientation,
        color: this.color,
      });
    },

    setOrderBy(orderBy: SearchOrderType) {
      this.orderBy = orderBy;
      this.searchPhotos();
    },
    setOrientation(
      orientation: SearchOrientationType | typeof DEFAULT_ORIENTATION_OPTION,
    ) {
      this.orientation =
        orientation === DEFAULT_ORIENTATION_OPTION ? null : orientation;
      this.searchPhotos();
    },

    setColor(color: SearchColorsType | 'any') {
      this.color = color === 'any' ? null : color;
      this.searchPhotos();
    },
  },
});
