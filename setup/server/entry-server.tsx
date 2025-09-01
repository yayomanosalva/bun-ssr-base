import { App } from '@/App';
import { StrictMode } from 'react';

export function render() {
  // Pasar el tiempo como prop para que sea consistente
  const serverTime = new Date().toLocaleTimeString();
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}