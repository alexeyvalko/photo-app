import type { RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SearchView from '@/views/SearchView.vue';
import PhotoView from '@/views/PhotoView.vue';
import AboutView from '@/views/AboutView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/photo/:photoId',
    name: 'photo',
    component: PhotoView,
  },
  {
    path: '/search/photos/:query?',
    name: 'search',
    component: SearchView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

export default routes;
