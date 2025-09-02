import { Suspense, useEffect, useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HelmetProvider } from 'react-helmet-async';
import { createQueryClient } from '../config/query';
import { IS_DEV } from '../config/env';

export const queryClient = createQueryClient();

const ClientOnly = ({ children, fallback = null }: { children: React.ReactNode; fallback?: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? <>{children}</> : <>{fallback}</>;
};

export function AppProviders({ children }: { children: React.ReactNode }) {
  // Creamos un queryClient estable
  const [queryClient] = useState(() => createQueryClient());

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ClientOnly>
          {IS_DEV && (
            <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
          )}
        </ClientOnly>
      </QueryClientProvider>
    </HelmetProvider>
  );
}