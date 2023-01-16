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

export const useSearchStore = defineStore({
  id: 'search',
  state: () => ({
    query: '',
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
    searchQueryParams: (state): IQueryParams | null => {
      const queries = {
        orientation: state.orientation,
        color: state.color,
        order_by: state.orderBy,
        page: state.page === 1 ? null : state.page,
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
          query: this.query,
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
