#Desafio Semana 12 - API
Este é um projeto de API desenvolvido como parte do desafio da semana 12. A API é construída com Node.js, Express e TypeScript, e usa MongoDB para gerenciamento de dados. Inclui autenticação de usuários, gerenciamento de eventos e documentação Swagger para a API.

##Tecnologias Utilizadas
Node.js
Express
TypeScript
MongoDB
Swagger
Jest para testes
ts-node-dev para desenvolvimento

##Configuração
###Instalação
Clone o repositório:

git clone https://github.com/SEU_USUARIO/desafio-semana-12](https://github.com/thiaagomeira/Desafio-3---Semana-12---Node-AWS.git

###Navegue até o diretório do projeto:
cd desafio-semana-12

###Instale as dependências:
npm install

##Configuração do Ambiente
###Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:
JWT_SECRET=seu-segredo-aqui
MONGO_URI=sua-uri-do-mongodb-aqui


##Scripts
###Iniciar o Servidor:
npm start

###Rodar Testes:
npm test

###Compilar TypeScript:
npm run build


###Rodar o Servidor em Desenvolvimento:
npm run dev

###Documentação Swagger
A documentação da API está disponível em http://localhost:3001/api-docs quando o servidor está rodando.

##Solução de Problemas
###Erro ts-node-dev: no script to run provided:
Certifique-se de que o arquivo server.ts está no diretório src e que o comando no package.json está correto. O script start deve apontar para ts-node ./src/server.ts.

###Erro Cannot find module ou Property does not exist on type:
Verifique se as dependências estão instaladas corretamente e se você possui as declarações de tipo necessárias. Execute npm install para garantir que todas as dependências estejam instaladas.

###Erro Could not find a declaration file for module 'swagger-jsdoc':
Instale o pacote de tipos com npm install --save-dev @types/swagger-jsdoc. Se o pacote não estiver disponível, crie uma declaração de tipo manual no diretório src/types.

##Licença
Este projeto está licenciado sob a Licença MIT.
