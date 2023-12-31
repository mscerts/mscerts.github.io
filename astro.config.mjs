import { defineConfig } from 'astro/config';
import { settings } from './src/data/settings';
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: 'https://mscerts.github.io',
  integrations: [sitemap()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});