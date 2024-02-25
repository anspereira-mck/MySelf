import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import {packageJson} from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 3000,
  },
  //MySelf Github Pages
  base: process.env.PREVIEW === 'true' ? '/' : '/MySelf/',
});
