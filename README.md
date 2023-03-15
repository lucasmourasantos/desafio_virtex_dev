# desafio_virtex_dev
Desafio – VirteX - Desenvolvimento
===================================================================================================================

Desenvolvido as etapas, com exceções:
Não consegui integrar o back-end com o front-end no container docker, mas fiz um deploy completo do back-end com BD criado e funcionando um CRUD completo.

Front-end rodando separadamente, local.

# Criar Front End Client
- npx create-react-app .

# Criar Back End
- npm init
- index.js
- npm install express body-parser mysql
- npm install nodemon
- npm install cors
- npm install axios

# Criando Docker container do nodejs + express e Mysql
## Executando na pasta server
docker-compose up --build

## Executando na pasta client
npm start

## Acessando o back-end
http://localhost:3000/conectar
http://localhost:3000/criar-db
http://localhost:3000/criar-tabela
http://localhost:3000/inserir
http://localhost:3000/mostrar