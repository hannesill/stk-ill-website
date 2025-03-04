import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // Ensures all routes are served properly
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.VITE_BASE_PATH || '',
      assets: process.env.VITE_BASE_PATH || ''
    }
  }
};

export default config;