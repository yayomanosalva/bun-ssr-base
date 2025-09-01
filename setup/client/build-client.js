// Script para construir el cliente en desarrollo
import { build } from 'bun';

await build({
  entrypoints: ['./setup/client/entry-client.tsx'],
  outdir: './dist',
  target: 'browser',
  format: 'esm',
  sourcemap: 'inline',
  minify: false,
});

console.log('✅ Client bundle built for development');