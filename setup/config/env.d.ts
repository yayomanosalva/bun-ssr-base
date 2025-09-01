// src/config/env.d.ts
interface ImportMetaEnv {
  readonly ROOT_PUBLIC_API_URL: string;
  readonly ROOT_PUBLIC_ASSETS_URL: string;
  readonly ROOT_PUBLIC_ENV: 'development' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}