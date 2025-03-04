import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // Ensures proper routing
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/stk-ill-website' : ''
    },
    prerender: {
      handleHttpError: ({ path, status, message }) => {
        if (status === 404) {
          console.warn(`Ignoring 404 error for path: ${path}`);
          return;
        }
        throw new Error(message);
      }
    }
  }
};

export default config;