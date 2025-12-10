import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Эта строка критически важна для предотвращения падения сайта, если где-то используется process.env
    'process.env': {} 
  }
});
