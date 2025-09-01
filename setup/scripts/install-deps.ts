// install-deps.ts
import { $ } from 'bun';

console.log('🚀 Instalando dependencias para EkklesiaFlow Client...');

// Instalar dependencias principales
console.log('📦 Instalando dependencias...');
await $`bun add \
  @elysiajs/static \
  @tanstack/react-query \
  @tanstack/react-query-devtools \
  @tanstack/react-router \
  @tanstack/react-router-devtools \
  autoprefixer \
  elysia \
  lucide-react \
  postcss \
  react-helmet-async \
  tailwindcss \
  zod`;

// Instalar dependencias de desarrollo
console.log('🔧 Instalando dependencias de desarrollo...');
await $`bun add -d \
  @biomejs/biome \
  @chromatic-com/storybook \
  @eslint/js \
  @rsbuild/core \
  @rsbuild/plugin-react \
  @storybook/addon-a11y \
  @storybook/addon-docs \
  @storybook/addon-onboarding \
  @storybook/addon-vitest \
  @storybook/react-vite \
  @tanstack/router-cli \
  @tanstack/router-plugin \
  @types/node \
  @types/react \
  @types/react-dom \
  bun-types \
  clsx \
  concurrently \
  eslint \
  eslint-plugin-react-hooks \
  eslint-plugin-react-refresh \
  eslint-plugin-storybook \
  globals \
  prettier \
  storybook \
  tailwind-merge \
  typescript \
  typescript-eslint \
  vitest \
  @vitest/browser \
  playwright \
  @vitest/coverage-v8`;

console.log('✅ Todas las dependencias instaladas correctamente!');
console.log('📋 Para verificar: bun pm list');