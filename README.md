# 🚀 Bun SSR React - Proyecto Base

Una aplicación React moderna con Server-Side Rendering (SSR) construida con **Bun**, **Tailwind CSS**, y el ecosistema **TanStack**.

## ✨ Características

- ⚡ **Bun Runtime** - Ultra rápido con soporte nativo para TypeScript
- 🎯 **React 19** - Con hooks y features modernos
- 🌐 **SSR Nativo** - Renderizado del lado del servidor con Bun
- 🔥 **Hot Module Replacement** - Desarrollo con recarga en caliente
- 🎨 **Tailwind CSS v3** - Estilos utilitarios con configuración personalizada
- 📡 **TanStack Query** - Manejo de estado server con React Query
- 🧭 **TanStack Router** - Routing declarativo y type-safe
- 🔐 **Variables de Entorno** - Validación con Zod
- 🛡️ **TypeScript** - Tipado estático completo
- 📦 **Build Optimizado** - Empaquetado eficiente con Bun

## 🚀 Instalación

```bash
# Clonar el proyecto
git clone <your-repo-url>
cd bun-ssr-react

# Instalar dependencias
bun install

# Configurar variables de entorno
cp .env.example .env

# Ejecutar en desarrollo
bun run dev
```

## 📁 Estructura del Proyecto

```
bun-ssr-react/
├── src/share/              # Código fuente de la aplicación
│   ├── components/         # Componentes reutilizables
│   ├── hooks/              # Custom hooks
│   ├── config/             # Configuración (router, env)
│   ├── lib/                # Utilidades y librerías
│   └── types/              # Definiciones TypeScript
├── setup/                  # Configuración del setup SSR
│   ├── client/             # Entry point del cliente
│   ├── server/             # Entry point del servidor
│   ├── utils/              # Utilidades compartidas
│   ├── providers/          # Providers (Query, Router)
│   └── config/             # Configuración del setup
├── styles/                 # Estilos globales
├── dist/                   # Build de producción
└── scripts/                # Scripts personalizados
```

## 🎯 Scripts Disponibles

```bash
# Desarrollo
bun run dev          # Ejecutar servidor de desarrollo con HMR
bun run build:css    # Generar estilos CSS
bun run type-check   # Verificar tipos TypeScript

# Producción
bun run build        # Build para producción
bun run start        # Ejecutar en modo producción

# Utilidades
bun run generate:routes  # Generar tipos para el router
bun run clean         # Limpiar directorio dist
```

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz:

```env
# App
APP_NAME="Bun SSR React App"
APP_VERSION="1.0.0"
NODE_ENV="development"

# API
API_BASE_URL="http://localhost:3000/api"
API_TIMEOUT="10000"

# Features
ENABLE_ANALYTICS="false"
ENABLE_DEBUG="true"
```

### Tailwind CSS

El proyecto incluye una configuración personalizada de Tailwind con:

- Modo claro/oscuro con CSS variables
- Colores semánticos personalizados
- Bordes y radios configurables
- Sistema de diseño consistente

### TanStack Router

Las rutas se definen en `src/config/routes.tsx`:

```typescript
// Ejemplo de ruta
const userRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'users/$userId',
  component: UserProfile,
});
```

## 🚀 Deployment

### Para Producción

```bash
# Build de producción
bun run build

# Ejecutar en producción
bun run start
```

### Plataformas Soportadas

- **Bun.sh** - Runtime nativo recomendado
- **Docker** - Contenerización fácil
- **Node.js** - Compatibilidad alternativa
- **Plataformas Cloud** - Vercel, Netlify, Railway

## 🛠️ Troubleshooting

### Problemas Comunes

1. **Error de HMR**: Asegúrate de que los archivos CSS y JS se estén sirviendo correctamente
2. **Problemas de Tipos**: Ejecuta `bun run type-check` para verificar
3. **Variables de Entorno**: Valida el archivo `.env` con el schema de Zod

### Comandos de Diagnóstico

```bash
# Verificar estructura de archivos
bun run type-check

# Limpiar cache
rm -rf dist node_modules/.cache

# Reinstalar dependencias
bun install --force
```

## 📈 Performance Tips

1. **Utiliza el HMR de Bun** - Los cambios son instantáneos
2. **Optimiza imágenes** - Usa el preload automático
3. **Code Splitting** - Aprovecha el bundling de Bun
4. **Cache estratégico** - Configura headers apropiados

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🏆 Reconocimientos

- [Bun.sh](https://bun.sh) - Runtime JavaScript ultra rápido
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS utility-first
- [TanStack](https://tanstack.com) - Suite de herramientas React
- [React](https://react.dev) - Biblioteca de interfaces de usuario

---

## 🚀 Próximos Pasos

1. [ ] Configurar testing con Vitest
2. [ ] Agregar Storybook para componentes
3. [ ] Configurar CI/CD pipeline
4. [ ] Agregar PWA capabilities
5. [ ] Internacionalización (i18n)
6. [ ] Analytics y monitoring

---
