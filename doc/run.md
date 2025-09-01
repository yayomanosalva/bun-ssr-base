# Hacer ejecutable el script bash
chmod +x install-deps.sh

# Ejecutar el script
bun run install-deps.sh

# O usar el script del package.json
bun run install:deps

# Para instalación completa desde cero
bun run setup