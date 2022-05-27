import Vue from '@vitejs/plugin-vue';
import viteSvgIcons from 'vite-plugin-svg-icons';
import svgLoader from 'vite-svg-loader';
import path from 'path';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),
    Pages({
      extensions: ['vue'],
      syncIndex: false,
    }),
    Layouts(),
    viteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/assets/img/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',

      svgoOptions: {
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: 'fill',
            },
          },
        ],
      },
    }),
    svgLoader(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/variables/index"; @import "./src/assets/scss/mixins/index";`,
        charset: false,
      },
      css: {
        charset: false,
      },
    },
  },
  transpileDependencies: ['vue-meta'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  publicDir: path.resolve(__dirname, './src/public'),
};
