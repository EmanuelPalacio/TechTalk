import { defineConfig } from 'vite';
import react from 'vite-preset-react';
i;

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
