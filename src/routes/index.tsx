import { createFileRoute } from "@tanstack/react-router";

function HomePage() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">🏠 Página de Inicio</h2>
      <p>¡Bienvenido a la aplicación con SSR y HMR funcionando!</p>
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: HomePage,
});