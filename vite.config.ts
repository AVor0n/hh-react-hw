import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import typescriptPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/hh-react-hw/' : '/',
  plugins: [
    react(),
    typescriptPaths(),
    checker({
      overlay: false,
      typescript: true,
    }),
  ],

  server: {
    port: 4000,
  },
});
