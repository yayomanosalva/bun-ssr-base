import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/vite';


export default defineConfig({
  plugins: [
    // ⚠️ Importante: tanstackRouter debe ir ANTES de react()
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
  ],
  define: {
    // Pasar variables de entorno al cliente
    'import.meta.env.IS_DEV': JSON.stringify(process.env.NODE_ENV === 'development'),
    'import.meta.env.JWT_SECRET': JSON.stringify(process.env.JWT_SECRET),
    'import.meta.env.CLIENT_PORT': JSON.stringify(process.env.CLIENT_PORT),
    // Agrega otras variables que necesites
  },
});