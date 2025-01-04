import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // default output folder
  },
  server: {
    open: true, // optional: auto open in browser
  },
  base: '/', // ensure base path is correct
});
