import type {
  OrderByListType,
  ResponseTypeUnsplash,
  SearchColorsType,
  SearchContentFilterType,
  SearchOrderType,
  SearchOrientationType,
} from '@/types/helpers';
import type { PhotoBasic } from './photos';

export interface IResponsePhotos<T> {
  type: ResponseTypeUnsplash;
  statusCode: number;
  results: T[];
  message?: string;
  errors?: never;
  total: number;
  total_pages: number;
}

export interface IPhotoListParams {
  page: number;
  per_page: number;
  order_by: OrderByListType;
}

export interface ISearchOptions {
  query: string;
  page?: number;
  per_page?: number;
  orientation?: SearchOrientationType | null;
  content_filter?: SearchContentFilterType;
  color?: SearchColorsType;
  order_by?: SearchOrderType | null;
  collections?: number[];
  lang?: string;
}

export interface IColorsOptions {
  colors: {
    any: 'Any color';
    black_and_white: 'Black and white';
  };
  tones: {
    black: string;
    white: string;
    yellow: string;
    orange: string;
    red: string;
    purple: string;
    magenta: string;
    green: string;
    teal: string;
    blue: string;
  };
}

export interface IColumns {
  column_1: PhotoBasic[];
  column_2: PhotoBasic[];
  column_3: PhotoBasic[];
}
