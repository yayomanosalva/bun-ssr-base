import type { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import { findClientFile } from './findClientFile';


export function render(jsx: ReactElement) {
  const clientFile = findClientFile();
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bun React SSR</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body class="bg-background text-foreground">
    <div id="root">${renderToString(jsx)}</div>
    <script type="module" src="/${clientFile}"></script>
</body>
</html>`;
}