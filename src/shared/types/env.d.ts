interface ImportMetaEnv {
  readonly ROOT_PUBLIC_API_URL: string;
  readonly ROOT_PUBLIC_ASSETS_URL: string;
  readonly ROOT_PUBLIC_ENV: 'development' | 'production';
  readonly JWT_SECRET: string;
  readonly CLIENT_PORT: string;
  readonly SERVER_PORT: string;
  readonly NODE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}