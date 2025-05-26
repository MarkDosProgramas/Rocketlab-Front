# 🚀 RocketLab Store

Uma loja virtual moderna e responsiva construída com React, TypeScript e Tailwind CSS.

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool e dev server
- **React Router** - Roteamento da aplicação
- **Lucide React** - Ícones modernos

## ✨ Funcionalidades

### 🛍️ Experiência de Compra

- **Catálogo de Produtos** - Visualização de produtos em destaque e listagem completa
- **Busca Inteligente** - Pesquisa por nome, descrição ou palavras-chave
- **Carrossel de Destaques** - Exibição dinâmica dos produtos em destaque

### 🛒 Carrinho de Compras

- **Gestão de Produtos** - Adicionar, remover e ajustar quantidades
- **Persistência de Dados** - Carrinho salvo no localStorage por usuário
- **Cupom de Desconto** - Aplicação do cupom "ROCKETLABVDEV" para 10% de desconto

### 💳 Checkout

- **Múltiplos Métodos de Pagamento** - Cartão de crédito e PIX
- **Resumo da Compra** - Visualização detalhada dos itens, subtotal e descontos
- **Confirmação de Pagamento** - Feedback visual após conclusão da compra

### 👤 Autenticação

- **Login de Usuário** - Sistema de autenticação para acesso às funcionalidades
- **Proteção de Rotas** - Áreas protegidas para usuários autenticados

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**

   ```bash
   git clone https://github.com/MarkDosProgramas/Rocketlab-Front.git
   cd front-activity
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Credenciais para teste**

   ```
   Username: visagio
   Password: 123

   ```

5. **Acesse a aplicação**
   - Abra seu navegador e acesse `http://localhost:5173`

## 📁 Estrutura do Projeto

### Principais Arquivos e Diretórios

```
src/
├── components/         # Componentes reutilizáveis
│   ├── Header.tsx     # Cabeçalho com navegação e busca
│   ├── Sidebar.tsx    # Carrinho de compras lateral
│   └── Footer.tsx     # Rodapé da aplicação
│
├── pages/             # Páginas da aplicação
│   ├── Home.tsx       # Página inicial com produtos
│   └── Payment.tsx    # Página de checkout
│
├── contexts/          # Contextos React
│   └── AuthContext.tsx # Gerenciamento de autenticação
│
├── types/             # Definições de tipos TypeScript
│   ├── cartTypes.ts   # Tipos relacionados ao carrinho
│   └── homeTypes.ts   # Tipos da página inicial
│
└── mocks/             # Dados mockados
    └── products.ts    # Lista de produtos
```
