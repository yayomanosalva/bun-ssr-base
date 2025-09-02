import { createFileRoute } from "@tanstack/react-router";

function yayoPage() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">🏠 Hola soy yayo</h2>
      <h2 className="text-2xl font-bold mb-4">🏠 todo bien</h2>
    </div>
  );
}

export const Route = createFileRoute('/yayo')({
  component: yayoPage,
});