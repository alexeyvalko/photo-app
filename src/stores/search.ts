import {
  DEFAULT_ORIENTATION_OPTION,
  SERVER_ENDPOINTS,
  ORIENTATION_OPTIONS,
  SERVER_URL,
  SEARCH_ORDER_OPTIONS,
  DEFAULT_SEARCH_ORDER,
  SEARCH_COLOR_OPTIONS,
} from '@/common/config';
import type { Photo } from '@/types/photos';
import { deleteFalsyKeys, filterPhotosByRatio } from '@/utils';
import type {
  IQueryParams,
  IResponsePhotos,
  ISearchOptions,
} from '@/types/interfaces';
import axios from 'axios';
import { defineStore } from 'pinia';
import type {
  SearchColorsType,
  SearchContentFilterType,
  SearchOrderType,
  SearchOrientationType,
} from '@/types/helpers';
import type { LocationQueryRaw } from 'vue-router';

export const useSearchStore = defineStore({
  id: 'search',
  state: () => ({
    query: '',
    page: 1,
    perPage: 15,
    orientation: null as SearchOrientationType | null,
    contentFilter: 'high' as SearchContentFilterType,
    color: null as SearchColorsType | null,
    orderBy: null as SearchOrderType | null,
    collectionIds: [],
    lang: 'en',
    totalPages: 1,
    total: 0,
    photos: [] as Photo[],
    isLoading: false,
  }),

  getters: {
    searchQueryParams: (state): LocationQueryRaw | undefined => {
      const queries: Partial<IQueryParams> = {
        orientation: state.orientation,
        color: state.color,
        order_by: state.orderBy,
        page: state.page === 1 ? null : state.page,
      };
      const filteredQueries = deleteFalsyKeys<LocationQueryRaw>(queries);
      return filteredQueries || undefined;
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
        this.totalPages = Number(response.data.total_pages);
        this.total = Number(response.data.total);
        this.photos = [...this.photos, ...response.data.results];
      } catch {
        console.error(`Failed to fetch photos`);
      } finally {
        this.isLoading = false;
      }
    },
    async loadPosts() {
      if (
        this.photos.length > 0 &&
        this.page < this.totalPages &&
        !this.isLoading
      ) {
        this.page += 1;
        const params: ISearchOptions = {
          query: this.query,
          page: this.page,
          per_page: this.perPage,
          order_by: this.orderBy,
          orientation: this.orientation,
        };
        if (!this.isLoading)
          await this.fetchPhotos(SERVER_ENDPOINTS.SEARCH_PHOTOS, params);
      }
    },

    async searchPhotos(page?: number) {
      this.photos = [];
      if (page) this.page = page;
      if (!this.isLoading)
        await this.fetchPhotos(SERVER_ENDPOINTS.SEARCH_PHOTOS, {
          query: this.query,
          page: this.page,
          per_page: this.perPage,
          order_by: this.orderBy,
          orientation: this.orientation,
          color: this.color,
        });
    },

    setOrderBy(orderBy: SearchOrderType) {
      const newOrderBy = orderBy === DEFAULT_SEARCH_ORDER ? null : orderBy;
      if (newOrderBy !== this.orderBy) {
        this.orderBy = newOrderBy;
        this.searchPhotos(1);
      }
    },
    setOrientation(
      orientation: SearchOrientationType | typeof DEFAULT_ORIENTATION_OPTION,
    ) {
      const newOrientation =
        orientation === DEFAULT_ORIENTATION_OPTION ? null : orientation;
      if (newOrientation !== this.orientation) {
        this.orientation = newOrientation;
        this.searchPhotos(1);
      }
    },

    setColor(color: SearchColorsType | 'any') {
      const newColor = color === 'any' ? null : color;
      if (this.color !== newColor) {
        this.color = newColor;
        this.searchPhotos(1);
      }
    },

    getQueryParams(params: IQueryParams) {
      const paramEntries = Object.entries(params);
      paramEntries.forEach((entry) => {
        switch (entry[0]) {
          case 'orientation':
            this.orientation = ORIENTATION_OPTIONS.includes(entry[1])
              ? entry[1]
              : null;
            break;
          case 'order_by':
            this.orderBy = SEARCH_ORDER_OPTIONS.includes(entry[1])
              ? entry[1]
              : null;
            break;
          case 'page':
            this.page = Number(entry[1]) || 1;
            break;
          case 'color':
            this.color = SEARCH_COLOR_OPTIONS.includes(entry[1])
              ? entry[1]
              : null;
            break;
        }
      });
    },
  },
});
