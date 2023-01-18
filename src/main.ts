import '@/styles/base.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import icons from '@/components/icons';

const app = createApp(App);

app.use(createPinia());
app.use(router);

icons.forEach((icon) => {
  app.component(icon.name, icon.component);
});

app.mount('#app');
