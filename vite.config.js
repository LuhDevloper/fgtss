import { defineConfig } from 'vite';

export default defineConfig({
  base: '/fgtss/', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
