import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { useState, useEffect } from 'react';
import { IS_DEV } from '../../setup/config/env';

function RootComponent() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Mi App</h1>
          </div>
        </header>
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      {isClient && IS_DEV && <TanStackRouterDevtools />}
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});