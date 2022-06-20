import type { RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SearchView from '@/views/SearchView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/photo/:photoId',
    name: 'photo',
    component: () => import('@/views/PhotoView.vue'),
  },
  {
    path: '/search/photos/:query?',
    name: 'search',
    component: SearchView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

export default routes;
