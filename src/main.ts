import App from './App.vue';

import { createSSRApp } from 'vue';
import { createRouter } from './router';
import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';
import { getUtmParamsFromSession } from '@/utils/utm';

import VueLazyLoad from 'vue3-lazyload';

import SvgIcon from '@/components/ui/SvgIcon.vue';
import 'virtual:svg-icons-register';

import '@/assets/scss/index.scss';

export function createApp(state?: any) {
  const app = createSSRApp(App);
  const head = createHead();
  const store = createPinia();
  if (state) store.state.value = state;

  const router = createRouter();
  router.afterEach(getUtmParamsFromSession);

  app.use(router);
  app.use(head);
  app.use(store);

  app.use(VueLazyLoad);

  app.component('SvgIcon', SvgIcon);

  return { app, router, head, store };
}
