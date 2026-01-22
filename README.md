# Blackfox Software - Consultoria e Fábrica de Software

Bem-vindo ao repositório oficial do site da **Blackfox Software**. Este projeto é uma aplicação web moderna de alto desempenho, desenvolvida para apresentar nossos serviços de consultoria tecnológica, desenvolvimento web e mobile.

Unimos engenharia de software robusta com design de alta qualidade para entregar soluções digitais que não apenas funcionam perfeitamente, mas também encantam e convertem.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando uma stack moderna e poderosa para garantir performance, escalabilidade e uma excelente experiência de desenvolvimento:

- **Core:**
  - [React 19](https://react.dev/) - Biblioteca para construção de interfaces de usuário.
  - [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript com tipagem estática.
  - [Vite](https://vitejs.dev/) - Build tool e dev server ultra-rápido.

- **Estilização & UI:**
  - [Chakra UI v3](https://www.chakra-ui.com/) - Component library acessível e modular.
  - [Emotion](https://emotion.sh/) - CSS-in-JS.
  - [React Icons](https://react-icons.github.io/react-icons/) - Ícones populares (Fa, Md, Si, etc.).
  - [React Slick](https://react-slick.neostack.com/) - Carrossel/Slider responsivo.
  - **3D / Gráficos:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & [Drei](https://github.com/pmndrs/drei) & [Three.js](https://threejs.org/).

- **Gerenciamento de Estado & Data Fetching:**
  - [TanStack Query (React Query)](https://tanstack.com/query/latest) - Gerenciamento de estado assíncrono.

- **Formulários & Validação:**
  - [React Hook Form](https://react-hook-form.com/) - Gerenciamento de formulários performático.
  - [Zod](https://zod.dev/) - Validação de esquemas TypeScript-first.

- **CMS (Gestão de Conteúdo):**
  - [Prismic](https://prismic.io/) - Headless CMS para conteúdo dinâmico.

## 📂 Estrutura do Projeto

A estrutura de pastas segue uma organização modular:

```
src/
├── components/   # Componentes reutilizáveis de UI
├── sections/     # Seções específicas da Landing Page (Home, Sobre, Serviços, Cases)
├── pages/        # Páginas da aplicação (Roteamento via React Router)
├── hooks/        # Hooks customizados
├── theme/        # Configurações de tema e tokens do Chakra UI
├── lib/          # Utilitários e configurações de bibliotecas (ex: Prismic)
├── assets/       # Imagens e arquivos estáticos
└── main.tsx      # Ponto de entrada da aplicação
```

## 🛠️ Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/rafaelsell/bfs-v3.git
    cd bfs-v3
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    # ou
    bun install
    ```

3.  **Execute o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

4.  **Acesse no navegador:**
    O projeto estará rodando em `http://localhost:5173` (ou outra porta indicada no terminal).

## 📦 Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Compila o projeto para produção.
- `lint`: Executa o ESLint para verificar problemas no código.
- `preview`: Visualiza a versão de produção localmente.
- `gen:tokens`: Gera tokens de tipagem do Chakra UI.
- `gen:types`: Gera tipos do Prismic CMS baseados nos modelos.

---

Desenvolvido por **Blackfox Software**.
