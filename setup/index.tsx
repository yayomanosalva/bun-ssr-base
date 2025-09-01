import { serve } from 'bun';
import { render } from '@/setup/utils/render';
import { render as renderApp } from '@/setup/server/entry-server';
import { findClientFile } from '@/setup/utils/findClientFile';

serve({
  port: 3000,
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Servir archivo CSS
    if (pathname === '/styles.css') {
      const cssFile = Bun.file('dist/styles.css');
      if (await cssFile.exists()) {
        return new Response(cssFile, {
          headers: { 
            'Content-Type': 'text/css',
            'Cache-Control': 'no-cache'
          }
        });
      }
    }

    // Servir archivos JavaScript del cliente
    if (pathname.includes('entry-client-') && pathname.endsWith('.js')) {
      const clientFile = Bun.file(`dist${pathname}`);
      if (await clientFile.exists()) {
        return new Response(clientFile, {
          headers: { 
            'Content-Type': 'application/javascript',
            'Cache-Control': 'no-cache'
          }
        });
      }
    }

    // Servir el archivo JS principal (fallback)
    if (pathname === '/client.js') {
      const clientFile = Bun.file('dist/client.js');
      if (await clientFile.exists()) {
        return new Response(clientFile, {
          headers: { 
            'Content-Type': 'application/javascript',
            'Cache-Control': 'no-cache'
          }
        });
      }
      
      // Si no existe, buscar el archivo con hash
      const latestClientFile = findClientFile();
      if (latestClientFile !== 'client.js') {
        return new Response(Bun.file(`dist/${latestClientFile}`), {
          headers: { 
            'Content-Type': 'application/javascript',
            'Cache-Control': 'no-cache'
          }
        });
      }
    }

    // Renderizar la aplicación React con SSR
    try {
      const app = renderApp();
      const html = render(app);
      
      return new Response(html, {
        headers: { 'Content-Type': 'text/html' },
      });
    } catch (error) {
      console.error('Error rendering:', error);
      return new Response('Server Error', { status: 500 });
    }
  },
});

console.log('🚀 Server running at http://localhost:3000');
console.log('🔥 HMR is enabled! Try editing src/components/App.tsx');