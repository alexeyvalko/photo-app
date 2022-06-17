export const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export enum SERVER_ENDPOINTS {
  PHOTOS = 'photos',
  SEARCH_PHOTOS = 'search/photos',
}

export const LIST_ORDER_OPTIONS = ['latest', 'oldest', 'popular'];
export const SEARCH_ORDER_OPTIONS = ['relevant', 'latest'];
export const ORIENTATION_OPTIONS = ['landscape', 'portrait', 'squarish'];
export const DEFAULT_ORIENTATION_OPTION = 'All orientations';
