# NextBlog

Blog de tecnologia desenvolvido com **Next.js 15** e **App Router**, focado em frontend moderno. Os artigos são carregados via JSON local, com rotas dinâmicas por slug, SEO dinâmico por página e geração estática no build.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Estiliza%C3%A7%C3%A3o-TailwindCSS-orange)

## Sobre o Projeto

O NextBlog é uma aplicação que reúne artigos sobre desenvolvimento frontend com React e Next.js. O projeto foi construído para colocar em prática conceitos como data fetching em Server Components, rotas dinâmicas, SEO dinâmico com `generateMetadata` e geração estática com `generateStaticParams`.

## Funcionalidades

- Página inicial com hero section e listagem de artigos
- Página individual de cada artigo com rota dinâmica (`/artigos/[slug]`)
- Layout global com Header e Footer reutilizáveis
- Navegação SPA com `next/link`
- SEO dinâmico com `title` e `description` únicos por artigo
- Geração estática das páginas com `generateStaticParams` (SSG)
- Otimização de imagens com `next/image`
- Otimização de fontes com `next/font`
- Design responsivo (Mobile First)

## Tecnologias

- **Next.js 15** — Framework React com App Router e rotas baseadas em arquivos
- **TypeScript** — Tipagem estática
- **TailwindCSS** — Estilização com classes utilitárias
- **React Icons** — Ícones SVG leves
- **next/image** — Otimização automática de imagens
- **next/font** — Carregamento otimizado de fontes do Google

## Estrutura do Projeto

```
src/
├── app/
│   ├── artigos/
│   │   └── [slug]/
│   │       └── page.tsx         # Página dinâmica do artigo
│   ├── components/
│   │   ├── Footer/
│   │   │   └── index.tsx
│   │   └── Header/
│   │       └── index.tsx
│   ├── layout.tsx               # Layout global (Header + Footer)
│   └── page.tsx                 # Página inicial (/)
├── data/
│   └── artigos.json             # Dados mockados dos artigos
├── styles/
│   └── globals.css              # Estilos globais e configuração Tailwind
└── utils/
    └── dataFormatter.ts         # Função de formatação de data pt-BR
```

## Como Rodar

```bash
# Clone o repositório
git clone https://github.com/felipedev90/next-blog.git

# Entre na pasta do projeto
cd next-blog

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Conceitos Aplicados

| Conceito                       | Aplicação no Projeto                                  |
| ------------------------------ | ----------------------------------------------------- |
| **Rotas baseadas em arquivos** | Páginas criadas pela estrutura de pastas em `app/`    |
| **Rotas dinâmicas**            | Pasta `[slug]` para páginas individuais de artigos    |
| **Server Components**          | Componentes renderizados no servidor por padrão       |
| **Data Fetching**              | Importação de JSON direto no Server Component         |
| **SSG**                        | `generateStaticParams` para gerar páginas no build    |
| **SEO dinâmico**               | `generateMetadata` com title e description por página |
| **TailwindCSS**                | Estilização com classes utilitárias nos componentes   |
| **Layout compartilhado**       | Header e Footer via `layout.tsx`                      |
| **Otimização de imagens**      | Componente `next/image` com lazy loading              |
| **Otimização de fontes**       | `next/font` com carregamento local                    |

## O que aprendi

- Data fetching com Server Components (sem `useEffect`)
- Rotas dinâmicas com parâmetros assíncronos via `params`
- SEO dinâmico com `generateMetadata`
- Geração estática com `generateStaticParams` (SSG)
- Otimização de fontes com `next/font` do Google
- Diferença entre SSG e SSR
- Organização de projeto com funções utilitárias reutilizáveis

## Autor

**Felipe Augusto**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/felipesilva90/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?logo=github&logoColor=white)](https://github.com/felipedev90)
