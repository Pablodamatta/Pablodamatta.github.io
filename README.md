# pablodamatta.github.io

Portfólio de **Pablo da Matta**, AI Product Owner em Recife.

🔗 **https://pablodamatta.github.io**

## Stack

- **Next.js 16** (App Router, export estático) + **React 19** + **TypeScript**
- **Tailwind CSS 4** com design tokens em CSS
- **Motion** para animações (reveal no scroll, contadores, timeline com progresso, spotlight)
- Gráficos em **SVG próprio**, sem biblioteca: paleta validada para daltonismo, tooltip e alternância para tabela
- SEO com Open Graph e JSON-LD (`Person`)
- Acessibilidade: `prefers-reduced-motion`, foco visível, skip link e tabelas alternativas aos gráficos

## Estrutura

```
src/
  app/            layout, estilos globais e página
  components/     seções da landing, primitivas de animação e gráficos
  lib/data.ts     todo o conteúdo do site (edite aqui)
```

## Rodando localmente

```bash
npm install
npm run dev
```

## Deploy

Cada push na `main` roda lint, build e publica a pasta `out/` no GitHub Pages
pelo workflow `.github/workflows/deploy.yml`.

> Em **Settings → Pages → Build and deployment**, a fonte deve estar como **GitHub Actions**.
