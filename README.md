# JJ Agency — Digital Studio

Site institucional da JJ Agency, construído com React + Vite + Tailwind CSS.

## Tecnologias

- **React 18** com TypeScript
- **Vite 5** como bundler
- **Tailwind CSS 3** para estilos
- **Motion (Framer Motion)** para animações
- **Lucide React** para ícones
- **shadcn/ui** componentes base

## Desenvolvimento local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Deploy no Vercel

1. Faça push do código para um repositório GitHub
2. Importe o repositório no [Vercel](https://vercel.com)
3. Use as configurações padrão (detecta Vite automaticamente):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Clique em **Deploy**

O arquivo `vercel.json` já está configurado para SPA routing (redirecionamento para `index.html`).
