import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    isMenuOpen: false,
  }),
  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
});
