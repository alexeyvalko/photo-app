import IconSearch from '@/components/icons/IconSearch.vue';
import { defineAsyncComponent } from 'vue';

export default [
  {
    name: 'IconSearch',
    component: IconSearch,
  },
  {
    name: 'IconDownload',
    component: defineAsyncComponent(
      () => import('@/components/icons/IconDownload.vue'),
    ),
  },
  {
    name: 'IconSmallArrow',
    component: defineAsyncComponent(
      () => import('@/components/icons/IconSmallArrow.vue'),
    ),
  },
  {
    name: 'IconLocation',
    component: defineAsyncComponent(
      () => import('@/components/icons/IconLocation.vue'),
    ),
  },
  {
    name: 'IconView',
    component: defineAsyncComponent(
      () => import('@/components/icons/IconView.vue'),
    ),
  },
  {
    name: 'IconCalendar',
    component: defineAsyncComponent(
      () => import('@/components/icons/IconCalendar.vue'),
    ),
  },
  {
    name: 'IconResolution',
    component: defineAsyncComponent(
      () => import('@/components/icons/IconResolution.vue'),
    ),
  },
];
