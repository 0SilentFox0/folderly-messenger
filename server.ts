import fs from 'fs';
import path from 'path';
import express from 'express';
import manifest from './dist/client/ssr-manifest.json';
import { createServer as _createServer } from 'vite';

async function createServer() {
  const resolve = (p: string) => path.resolve(__dirname, p);

  const app = express();

  const vite = await _createServer({
    root: process.cwd(),
    logLevel: 'error',
    server: {
      middlewareMode: true,
    },
  });
  // use vite's connect instance as middleware
  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      let template, render;
      // always read fresh template in dev
      template = fs.readFileSync(resolve('index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      // @ts-ignore
      render = (await vite.ssrLoadModule('/src/entry-server.ts')).render;

      const { html, preloadLinks } = await render(url, manifest);

      const htmlTemplate = template
        .replace(`<!--preload-links-meta-->`, preloadLinks.meta)
        .replace(`<!--preload-links-js-->`, preloadLinks.js)
        .replace(`<!--preload-links-css-->`, preloadLinks.css)
        .replace(`<!--app-html-->`, html);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(htmlTemplate);
    } catch (e: any) {
      // eslint-disable-next-line
      vite && vite.ssrFixStacktrace(e);
      // eslint-disable-next-line no-console
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  // @ts-ignore
  return { app, vite };
}

(async () => {
  const { app } = await createServer();
  app.listen(Number(process.env.PORT) || 3000, '0.0.0.0', () => {
    // eslint-disable-next-line no-console
    console.log('Server listening on http://localhost:3000');
  });
})();

// for test use
export default createServer;
