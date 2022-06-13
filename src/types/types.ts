import type { OrderByType, ResponseTypeUnsplash } from './helpers';

export interface IPhotoListOptions {
  page: number;
  perPage: number;
  orderBy: OrderByType;
}

export interface IResponsePhotos<T> {
  type: ResponseTypeUnsplash;
  statusCode: number;
  results: T[];
  errors?: never;
  total: number;
  total_pages: number;
}
