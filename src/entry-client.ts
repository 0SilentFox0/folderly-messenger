import { createApp } from './main';

let store = {};
if (window.__STORE) store = JSON.parse(JSON.stringify(window.__STORE));

const { app, router } = createApp(store);

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#app');
});
