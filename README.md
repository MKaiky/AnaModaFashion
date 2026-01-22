# 🛒 E-commerce React + TypeScript

Projeto de **e-commerce** desenvolvido com **React**, **TypeScript** e **Context API**, focado em boas práticas de organização, componentização e documentação.

O projeto conta com páginas de catálogo, login, sobre, carrinho de compras e documentação automática com TypeDoc.

---

## 🚀 Tecnologias utilizadas

- React
- TypeScript
- React Router DOM
- Context API
- Styled Components / CSS Modules (ajuste conforme você usou)
- TypeDoc (documentação do código)
- Lucide React / React Icons

---

## 📁 Estrutura do projeto

src/
├─ components/
│ ├─ Header.tsx
│ ├─ Footer.tsx
│ └─ ...
├─ context/
│ └─ CartContext.tsx
├─ pages/
│ ├─ Home.tsx
│ ├─ Catalogo.tsx
│ ├─ Login.tsx
│ └─ Sobre.tsx
├─ types/
├─ App.tsx
└─ main.tsx


---

## ▶️ Como rodar o projeto

No diretório do projeto, execute:

### `npm install`

Instala todas as dependências do projeto.

### `npm start`

Inicia a aplicação em modo de desenvolvimento.  
Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## 🏗️ Build para produção

```bash
npm run build

Gera a versão otimizada do projeto na pasta build.

📚 Documentação do código

Este projeto utiliza TypeDoc para gerar documentação automática do código TypeScript.

Gerar documentação:
npx typedoc

A documentação será gerada na pasta docs/.

🧠 Funcionalidades

Listagem de produtos (Catálogo)

Modal de detalhes do produto

Carrinho de compras com Context API

Página de login (simulação)

Página institucional (Sobre)

Layout organizado com Header e Footer

📌 Observações

Este projeto tem fins educacionais e demonstrativos, podendo ser facilmente expandido para integração com APIs reais, autenticação e banco de dados.

👨‍💻 Autor

Desenvolvido por Grupo Klada (Marcos Kaiky, Maria Leticia, Andressa Fidellis, Dailma da Silva e Arila Raposo)
Projeto acadêmico / portfólio