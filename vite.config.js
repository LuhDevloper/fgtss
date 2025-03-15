// vite.config.js
export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  // Remover o base ou usar a raiz "/"
  
});
