## 🔧 **Paso 8: Configuración para Nuevos Proyectos**

**README-portable-setup.md**
```markdown
# 🚀 Setup Portable Bun + React SSR

Para usar en un nuevo proyecto:

1. Copiar la carpeta `setup/` a tu nuevo proyecto
2. Instalar dependencias:
```bash
bun add @tanstack/react-router @tanstack/react-query @tanstack/react-query-devtools react-helmet-async zod
```

3. Configurar variables de entorno en `.env`
4. Crear tus rutas en `src/routes/`
5. Ejecutar: `bun run generate:routes`
6. Ejecutar: `bun run dev`
```
