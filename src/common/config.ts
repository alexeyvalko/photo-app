import type { IColorsOptions } from '@/types/interfaces';

export const SERVER_URL =
  import.meta.env.VITE_SERVER_URL || 'http://localhost:5000';

export enum SERVER_ENDPOINTS {
  PHOTOS = 'photos',
  SEARCH_PHOTOS = 'search/photos',
}

export const DEFAULT_PAGE_TRANSITION_DURATION = 300;

export const LIST_ORDER_OPTIONS = ['latest', 'oldest', 'popular'];
export const SEARCH_ORDER_OPTIONS = ['relevant', 'latest'];
export const ORIENTATION_OPTIONS = ['landscape', 'portrait', 'squarish'];
export const DEFAULT_ORIENTATION_OPTION = 'All orientations';
export const DEFAULT_SEARCH_ORDER = 'relevant';
export const MENU_LINKS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
];

export const COLOR_OPTIONS: IColorsOptions = {
  colors: {
    any: 'Any color',
    black_and_white: 'Black and white',
  },
  tones: {
    black: 'rgb(77, 77, 77)',
    white: 'rgb(255, 255, 255)',
    yellow: 'rgb(252, 220, 0)',
    orange: 'rgb(254, 146, 0)',
    red: 'rgb(244, 78, 59)',
    purple: 'rgb(123, 100, 255)',
    magenta: 'rgb(171, 20, 158)',
    green: 'rgb(164, 221, 0)',
    teal: 'rgb(104, 204, 202)',
    blue: 'rgb(0, 156, 224)',
  },
};
