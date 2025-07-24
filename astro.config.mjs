import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nick.github.io',
  base: '/my-blog-2', // ← match your repo name exactly
  output: 'static',
});
