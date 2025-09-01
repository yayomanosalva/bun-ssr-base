import { readdirSync, existsSync, statSync } from 'fs';
import { join } from 'path';


// Función para encontrar el archivo del cliente más reciente
export function findClientFile(): string {
  try {
    const distDir = join(process.cwd(), 'dist');
    if (!existsSync(distDir)) return 'client.js';
    
    const files = readdirSync(distDir);
    const clientFiles: string[] = files.filter(file => file.startsWith('entry-client-') && file.endsWith('.js'));

    if (clientFiles.length > 0) {
      clientFiles.sort((a, b) => {
        const statA = statSync(join(distDir, a)).mtimeMs;
        const statB = statSync(join(distDir, b)).mtimeMs;
        return statB - statA;
      });
      return clientFiles[0]!; // Esto siempre será string
    }
    
    return 'client.js'; // Fallback garantizado
  } catch (error) {
    return 'client.js'; // Siempre retorna string
  }
}