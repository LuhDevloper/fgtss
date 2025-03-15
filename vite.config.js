import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/frontend', // Configura o diretório de entrada para o frontend
  build: {
    outDir: '../dist', // Saída para o diretório 'dist' na raiz
    emptyOutDir: true, // Limpa a pasta de saída antes de gerar os novos arquivos
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // Geração de classes CSS com camelCase
    },
  },
  server: {
    port: 3000, // Porta para o servidor de desenvolvimento
  },
});
