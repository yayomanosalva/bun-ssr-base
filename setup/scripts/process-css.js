import { spawn } from 'child_process';
import { existsSync, mkdirSync } from 'fs';

async function processCSS() {
  console.log('🎨 Processing CSS with UnoCSS and PostCSS...');
  
  try {
    // Asegurar que la carpeta dist existe
    if (!existsSync('./dist')) {
      mkdirSync('./dist');
    }

    // Procesar CSS con UnoCSS + PostCSS
    const process = spawn('bunx', [
      '@unocss/cli',
      './setup/styles/globals.css',
      '--out-file',
      './dist/styles.css',
      '--postcss'
    ], {
      stdio: 'inherit',
      shell: true
    });

    return new Promise((resolve) => {
      process.on('close', (code) => {
        if (code === 0) {
          console.log('✅ CSS processed successfully');
          resolve(true);
        } else {
          console.error('❌ CSS processing failed');
          resolve(false);
        }
      });
    });
  } catch (error) {
    console.error('❌ Error processing CSS:', error);
    return false;
  }
}

// Ejecutar si se llama directamente
if (import.meta.main) {
  await processCSS();
}

export { processCSS };