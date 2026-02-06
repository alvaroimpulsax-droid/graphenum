// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://graphenumastro.vercel.app',
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
