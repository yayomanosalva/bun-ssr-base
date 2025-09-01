import { spawn } from 'child_process';
import { existsSync } from 'fs';

async function generateCSS() {
  console.log('🎨 Generating CSS with UnoCSS...');
  
  try {
    // Usar el CLI de UnoCSS para generar el CSS
    const process = spawn('bunx', [
      '@unocss/cli',
      './styles/globals.css',
      '--out-file',
      './dist/styles.css',
      '--watch'
    ], {
      stdio: 'inherit'
    });

    process.on('close', (code) => {
      if (code === 0) {
        console.log('✅ CSS generated successfully');
      } else {
        console.error('❌ CSS generation failed');
      }
    });

    return process;
  } catch (error) {
    console.error('❌ Error generating CSS:', error);
    return null;
  }
}

// Ejecutar la generación
if (import.meta.main) {
  await generateCSS();
}