# Portfólio Matheus Ramyres

Site pessoal e portfólio construído com Next.js, TypeScript e Tailwind CSS.

## Visão geral

Este projeto apresenta um portfólio full stack com as seguintes seções:

- Apresentação pessoal com animação de texto.
- Sobre mim.
- Habilidades e tecnologias.
- Experiência.
- Projetos em destaque.
- Formulário de contato com envio de email via API.

A arquitetura é baseada em um layout App Router do Next.js, com conteúdo organizado em `src/domains` e componentes reutilizáveis em `src/ui`.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint
- React Hook Form
- Zod
- Resend API (para envio de email)
- Node.js v22.20.0 (versão usada no desenvolvimento)

## Funcionalidades principais

- Landing page responsiva
- Sessões de perfil, skills, experiência, projetos e contato
- Formulário de contato com validação de campos
- Envio de email no servidor pela rota `src/app/api/send-email/route.ts`
- Links para GitHub, LinkedIn e redes sociais

## Estrutura do projeto

- `src/app/` — rota principal, layout global e API
- `src/domains/` — conteúdo e modelos de dados por domínio
- `src/ui/components/` — componentes reutilizáveis
- `src/ui/sections/` — seções de página reutilizáveis
- `public/` — arquivos estáticos como imagens e ícones

## Pré-requisitos

Antes de rodar o projeto localmente, assegure-se de ter as seguintes ferramentas instaladas:

- Node.js v22.20.0 (recomendado) — inclui `npm`.
- Git — para clonar o repositório.
- Opcional: `nvm` / `nvm-windows` para gerenciar múltiplas versões do Node.
- Opcional: `pnpm`, `yarn` ou `bun` se preferir outro gerenciador de pacotes.

Verifique as versões com:

```bash
node -v
npm -v
git --version
```

## Execução local

1. Instale as dependências:

```bash
npm install
```

2. Defina as variáveis de ambiente:

```env
RESEND_API_KEY=seu_api_key_resend
RESEND_FROM="Portfolio <no-reply@ramyres.com>"
CONTACT_RECEIVER_EMAIL=seu-email@dominio.com
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse:

```text
http://localhost:3000
```

## Scripts úteis

- `npm run dev` — roda o app em modo de desenvolvimento
- `npm run build` — cria a versão de produção
- `npm run start` — inicia o servidor de produção
- `npm run lint` — executa o ESLint

## Sobre o formulário de contato

O formulário envia dados para a API interna em `src/app/api/send-email/route.ts`. O servidor usa o `RESEND_API_KEY` configurado nas variáveis de ambiente para enviar a mensagem.

Campos obrigatórios:

- `name`
- `email`
- `message`

## Personalização

Para atualizar textos, links e dados de contato, edite os arquivos em:

- `src/domains/profile/profile.content.ts`
- `src/domains/contact/contact.content.ts`
- `src/domains/project/project.content.ts`
- `src/domains/skill/skill.content.ts`

## Deploy

Este projeto é compatível com Vercel ou qualquer plataforma que suporte Next.js. Para produção, execute:

```bash
npm run build
npm run start
```

> Dica: mantenha as variáveis de ambiente `RESEND_API_KEY`, `RESEND_FROM` e `CONTACT_RECEIVER_EMAIL` configuradas no ambiente de produção para garantir o funcionamento do formulário de contato.

## Testes

Este repositório inclui testes unitários/integrados com `vitest` e testes E2E com `Playwright`.

Instale as dependências e os navegadores do Playwright:

```bash
npm install
npx playwright install
```

Rodar os testes unitários/integrados (Vitest):

```bash
npm run test
```

Rodar os testes E2E (Playwright) — certifique-se de que o servidor de desenvolvimento está rodando (`npm run dev`) ou execute uma build + start em outra aba:

```bash
npm run dev
npm run test:e2e
```

Os testes de exemplo incluem validação do schema de contato (`src/__tests__/contact.schema.test.ts`), checagens de conteúdo (`src/__tests__/profile.content.test.ts`, `src/__tests__/project.content.test.ts`) e um E2E simples em `e2e/home.spec.ts`.

### Testes E2E com interface (Playwright UI)

Você pode executar o Playwright Test Runner em modo gráfico para inspecionar testes, reexecutá-los manualmente e debugar interações:

```bash
npm run test:ui
```

Esse comando abre a interface do Playwright onde você pode selecionar testes, visualizar traces e reproduzir falhas. Se preferir um nome de script alternativo mais explícito, por exemplo `test:e2e:ui`, eu posso renomear o script em `package.json` e atualizar o README para refletir a alteração.

### Resultados dos testes (execução local)

- Vitest (unit/integration): 3 arquivos de teste, 7 testes no total — todos passaram.
- Playwright (E2E): 1 teste — passou.

Os resultados acima foram gerados localmente em 2026-06-11 após instalar dependências e executar os comandos de teste.
