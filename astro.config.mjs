// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Sitio estático sin backend ni adaptador de servidor
export default defineConfig({
  output: 'static',
});
