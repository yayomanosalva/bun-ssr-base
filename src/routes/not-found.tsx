// src/routes/not-found.tsx
import { createFileRoute } from '@tanstack/react-router';
import { AlertTriangle } from 'lucide-react';
import React from 'react';

// ✅ Primero define el componente con export const
export const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 text-center">
        <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-red-100 text-red-600">
          <AlertTriangle size={40} />
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Página no encontrada
        </h1>

        <p className="mt-2 text-lg text-gray-600 max-w-xs mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>

        <a
          href="/"
          className="inline-block mt-6 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

// ✅ Luego define la ruta, usando el componente ya exportado
export const Route = createFileRoute('/not-found')({
  component: NotFound,
});