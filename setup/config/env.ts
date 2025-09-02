import { z } from 'zod';

export const envSchema = z.object({
  JWT_SECRET: z.string().min(32),
  CLIENT_PORT: z.coerce.number().int().positive().default(3001),
  ROOT_PUBLIC_API_URL: z.string().url().default("http://localhost:3000/api/v1"),
  ROOT_PUBLIC_ASSETS_URL: z.string().url().default("http://localhost:3001/"),
  ROOT_PUBLIC_ENV: z.enum(['development', 'production', 'test']).default('development'),
  SERVER_PORT: z.coerce.number().int().positive().default(3000),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export type Env = z.infer<typeof envSchema>;

// Función segura para ambos entornos (SSR y CSR)
export const getEnv = () => {
  const isBrowser = typeof window !== 'undefined';
  
  // En el cliente, usar las variables inyectadas
  if (isBrowser && typeof window.__INITIAL_ENV__ !== 'undefined') {
    return envSchema.parse({
      ...window.__INITIAL_ENV__,
      JWT_SECRET: '', // No exponemos secretos al cliente
      CLIENT_PORT: 3001,
      SERVER_PORT: 3000,
    });
  }
  
  // En el servidor, usar Bun.env
  return envSchema.parse({
    JWT_SECRET: Bun.env.JWT_SECRET,
    CLIENT_PORT: Bun.env.CLIENT_PORT,
    ROOT_PUBLIC_API_URL: Bun.env.ROOT_PUBLIC_API_URL,
    ROOT_PUBLIC_ASSETS_URL: Bun.env.ROOT_PUBLIC_ASSETS_URL,
    ROOT_PUBLIC_ENV: Bun.env.ROOT_PUBLIC_ENV,
    SERVER_PORT: Bun.env.SERVER_PORT,
    NODE_ENV: Bun.env.NODE_ENV,
  });
};

// Variable segura para desarrollo
export const IS_DEV = typeof window !== 'undefined' 
  ? import.meta.env?.DEV !== undefined 
    ? import.meta.env.DEV 
    : process.env.NODE_ENV === 'development'
  : process.env.NODE_ENV === 'development';