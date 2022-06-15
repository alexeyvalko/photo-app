import type {
  OrderByListType,
  ResponseTypeUnsplash,
  SearchColorsType,
  SearchContentFilterType,
  SearchOrderType,
  SearchOrientationType,
} from '@/types/helpers';

// export interface IPhotoListOptions {
//   page: number;
//   perPage: number;
//   orderBy: OrderByListType;
// }

export interface IResponsePhotos<T> {
  type: ResponseTypeUnsplash;
  statusCode: number;
  results: T[];
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
  orientation?: SearchOrientationType;
  content_filter?: SearchContentFilterType;
  color?: SearchColorsType;
  order_by?: SearchOrderType;
  collections?: number[];
  lang?: string;
}
