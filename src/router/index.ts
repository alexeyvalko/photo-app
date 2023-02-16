import { DEFAULT_PAGE_TRANSITION_DURATION } from './../common/config';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition);
        }, DEFAULT_PAGE_TRANSITION_DURATION);
      });
    } else if (from.path === to.path) {
      return {};
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0, behavior: 'smooth' });
        }, DEFAULT_PAGE_TRANSITION_DURATION);
      });
    }
  },
});

export default router;
