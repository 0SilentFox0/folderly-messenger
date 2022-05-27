import * as path from 'path';
import * as fs from 'fs-extra';
import { JSDOM } from 'jsdom';
// import { render } from '@/entry-server';
const { render } = require('./dist/server/entry-server.js');
import manifest from './dist/static/ssr-manifest.json';
import { generateSitemap, IPage } from '@/utils/static-helpers/sitemap';
import { SITE_URL } from '@/utils/constants';
import { arrayUtils } from '@/utils/array';

const domain = SITE_URL;
// const domain = 'https://folderly-site-dev.web.app';

const toAbsolute = (p: string) => path.resolve(__dirname, p);

const insertAfter = (newNode: any, existingNode: any) => {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
};

const checkUrl = (url: string) => {
  if (url === '/') return '';
  if (url.slice(-1) === '/') return url.slice(0, -1);
  return url;
};

const replaceHead = (template: string) => {
  const dom = new JSDOM(template);
  document = dom.window.document;

  const vendorJs = document.querySelector<HTMLLinkElement>(
    'head link[rel="modulepreload"]',
  );
  const meta = document.querySelector<HTMLMetaElement>(
    'head meta[name="viewport"]',
  );
  const scripts = document.querySelectorAll<HTMLScriptElement>('head script');
  const linkCss = document.querySelector<HTMLLinkElement>(
    'head link[rel="stylesheet"]',
  );

  insertAfter(vendorJs, meta);

  Array.from(scripts)
    .reverse()
    .forEach(script => insertAfter(script, linkCss));

  return dom.serialize();
};

let template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');
let routesToPrerender = fs.readdirSync(toAbsolute('src/pages')).map(file => {
  const name = file.replace(/\.vue$/, '').toLowerCase();
  return name === 'index' ? `/` : `/${name}`;
});

(async () => {
  // pre-render each route...

  // put requests for pages here
  const allUrls = [
    ...routesToPrerender,
  ];

  const sitemapRoutes = [] as IPage[];

  const urlsActions = allUrls.map(url => async () => {
    sitemapRoutes.push({
      path: domain + url,
    });

    const { html, preloadLinks, payload } = await render(url, manifest);

    const newTemplate = replaceHead(
      template.replace(
        `<!--payload-->`,
        `<script src='${domain}${checkUrl(url)}/payload.js'></script>`,
      ),
    );

    payload.common.isServer = true;
    payload.common.isClient = false;
    const payloadScript = `window.__STORE=${JSON.stringify(payload)}`;
    const htmlTemplate = newTemplate
      .replace(`<!--preload-links-meta-->`, preloadLinks.meta)
      .replace(`<!--preload-links-js-->`, preloadLinks.js)
      .replace(`<!--preload-links-css-->`, preloadLinks.css)
      .replace(`<!--app-html-->`, html);

    const filePath = `dist/static${url}/`;

    await Promise.all([
      fs.outputFile(toAbsolute(filePath + 'index.html'), htmlTemplate),
      fs.outputFile(toAbsolute(filePath + 'payload.js'), payloadScript),
    ]);
    console.log('pre-rendered:', filePath + 'index.html');
  });

  const urlsChunks = arrayUtils.createChunks(urlsActions, 1);

  for (let i = 0; i < urlsChunks.length; i++) {
    await Promise.all(urlsChunks[i].map(async f => f()));
  }

  await generateSitemap({
    outputDir: './dist/static',
    pages: sitemapRoutes,
    domain,
  });

  // done, delete ssr manifest
  fs.unlinkSync(toAbsolute('dist/static/ssr-manifest.json'));
})();
