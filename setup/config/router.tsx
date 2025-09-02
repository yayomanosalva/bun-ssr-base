import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '../../src/routeTree.gen';

// Crear y exportar el router con opciones optimizadas
export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  defaultPreloadDelay: 0,
  context: {
    isServer: typeof window === 'undefined'
  }
});

export { RouterProvider };

// Asegurar que el router está listo
// router.subscribe('mounted', () => {
//   if (import.meta.hot) {
//     console.log('🚀 Router mounted and ready for navigation');
//   }
// });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}