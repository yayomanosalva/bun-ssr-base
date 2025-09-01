import { hydrateRoot } from 'react-dom/client';
import { App } from '@/App';
import { StrictMode } from 'react';

// Obtener datos del servidor
const serverData = (window as any).__SERVER_DATA__ || {};

// Hidratar la aplicación React
const rootElement = document.getElementById('root');
if (rootElement) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  );
}

// HMR para el cliente
if (import.meta.hot) {
  import.meta.hot.accept();
}