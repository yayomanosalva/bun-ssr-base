import { useState, useEffect } from 'react';
import { APITester } from '../setup/test/APITester';

interface AppProps {
  serverTime?: string;
}

export function App({ serverTime }: AppProps) {
  const [count, setCount] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  // 🔥 SOLUCIÓN: Evitar contenido dinámico durante la hidratación
  useEffect(() => {
    // Todo el contenido dinámico se ejecuta solo en el cliente
    setCurrentTime(serverTime || new Date().toLocaleTimeString());

    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, [serverTime]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Bun + React SSR + HMR 🚀</h1>

        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
          <h1>Mi Aplicación Específica</h1>
          {/* Tu contenido aquí */}
        </div>

        {/* 🔥 Texto estático - sin cambios dinámicos */}
        <p className="text-lg text-gray-600 mb-8">
          Edit this component and see HMR work instantly!
        </p>

        <div className="bg-slate-50 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Interactive Demo</h2>
            <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
              Live
            </span>
          </div>

          <div className="my-6">
            <button
              onClick={() => setCount(count + 1)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
            >
              Count: {count}
            </button>
          </div>

          {/* 🔥 Mostrar tiempo solo cuando esté disponible */}
          {currentTime && (
            <p className="text-sm text-gray-500">
              Current time: <span className="font-mono">{currentTime}</span>
            </p>
          )}
        </div>

        <APITester />

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col gap-4 p-6 bg-slate-50 rounded-lg sm:flex-row sm:items-center sm:gap-6">
            <img
              className="mx-auto block h-24 w-24 rounded-full object-cover sm:mx-0 sm:shrink-0 border-4 border-white shadow-md"
              src="/img/erin-lindford.jpg"
              alt="Erin Lindford"
            />
            <div className="space-y-2 text-center sm:text-left">
              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">Erin Lindford</p>
                <p className="text-sm text-gray-500">Product Engineer</p>
              </div>
              <button className="px-4 py-2 border border-purple-200 text-purple-700 rounded-md hover:border-transparent hover:bg-purple-600 hover:text-white transition-colors duration-200 text-sm font-medium">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}