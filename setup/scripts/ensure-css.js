import { existsSync } from 'fs';
import { spawn } from 'child_process';

// Verificar si el CSS existe, si no, generarlo
if (!existsSync('dist/styles.css')) {
  console.log('📦 Generating CSS...');
  const process = spawn('npx', ['tailwindcss', '-i', './styles/globals.css', '-o', './dist/styles.css'], {
    stdio: 'inherit'
  });
  
  process.on('close', (code) => {
    if (code === 0) {
      console.log('✅ CSS generated successfully');
    } else {
      console.error('❌ Failed to generate CSS');
    }
  });
} else {
  console.log('✅ CSS already exists');
}