# Desafio Semana 12 - API
Uma API Node.js, Express e TypeScript para gerenciamento de eventos.

## Descrição:
Este projeto foi desenvolvido como parte do desafio da semana 12 e tem como objetivo criar uma API robusta e escalável para gerenciar eventos. A API utiliza Node.js como ambiente de execução, Express para construir o servidor web, TypeScript para tipagem estática e MongoDB para armazenar os dados. A documentação da API é gerada automaticamente utilizando Swagger.

## Tecnologias:

Node.js: Ambiente de execução JavaScript. Versão v20.16.0.
Express: Framework web para Node.js.
TypeScript: Linguagem de tipagem estática para JavaScript.
MongoDB: Banco de dados NoSQL. Versão 7.0.12.
Swagger: Ferramenta para gerar documentação de APIs interativa.
Jest: Framework de testes JavaScript.
ts-node-dev: Ferramenta para desenvolvimento com TypeScript.

## Configuração

### Instalação:

#### Clone o repositório:
git clone https://github.com/thiaagomeira/Desafio-3---Semana-12---Node-AWS.git

#### Navegue até o diretório do projeto:
cd desafio-semana-12

#### Instale as dependências:
npm install

## Configuração do Ambiente:
### Crie um arquivo .env na raiz do projeto:
JWT_SECRET=seu-segredo-aqui
MONGO_URI=sua-uri-do-mongodb-aqui

## Scripts:
### Iniciar o servidor: 
npm start
### Rodar testes:
npm test
### Compilar TypeScript:
npm run build
### Rodar o servidor em desenvolvimento:
npm run dev

## Documentação:
A documentação interativa da API está disponível em http://localhost:3001/api-docs quando o servidor estiver em execução.

## Estrutura do Projeto:

## |-- API
#### |-- /src
     |-- /config
         |-- swagger.ts
         |-- db.ts
     |-- /controllers
         |-- EventController.ts
         |-- UserController.ts
     |-- /middlewares
         |-- authMiddleware.ts
     |-- /models
         |-- Event.ts
         |-- User.ts
     |-- /routes
         |-- eventRoutes.ts
         |-- userRoutes.ts
     |-- /services
         |-- AuthService.ts
         |-- UserService.ts
     |-- /utils
         |-- generatePreSignedUrl.ts
     |-- /tests
         |-- EventService.test.ts
         |-- UserController.test.ts
     |-- /types
         |-- /express
             |-- index.d.ts
             |-- user.d.ts
         |-- swagger-jsdoc.d.ts
     |-- app.ts
     |-- server.ts
     |-- setupTests.ts
### |-- .env
### |-- .eslintrc.json
### |-- .gitignore
### |-- .prettierrc
### |-- index.js
### |-- jest.config.mjs
### |-- package-lock.json
### |-- package.json
### |-- tsconfig.json
### |-- README.md


## Licença:
Este projeto está licenciado sob a Licença MIT.   

## Solução de Problemas:

### Erro ts-node-dev: Verifique se o arquivo server.ts está no diretório src e se o script start no package.json está configurado corretamente.
### Erro Cannot find module ou Property does not exist on type: Certifique-se de que todas as dependências estão instaladas corretamente e que as declarações de tipo estão corretas.
### Erro Could not find a declaration file for module 'swagger-jsdoc': Instale o pacote de tipos @types/swagger-jsdoc.
