# desafio_virtex_dev
Desafio – VirteX - Desenvolvimento

# crud_node_react

# Criar Front End
npx create-react-app .

# Criar Back End
- npm init
- index.js
- npm install express body-parser mysql
- npm install nodemon
- npm install cors
- npm install axios

  -> #package.json
      - "scripts":
        "start": "node index.js",
        "devStart": "nodemon index.js",

- Criar DB
- CREATE DATABASE IF NOT EXISTS employeesystem;
- USE employeesystem;

CREATE TABLE `employeesystem`.`employees` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `age` INT(3) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `position` VARCHAR(100) NOT NULL,
  `wage` INT(5) NOT NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE IF NOT EXISTS employees (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  age INT(3) NOT NULL,
  country VARCHAR(45) NOT NULL,
  position VARCHAR(100) NOT NULL,
  wage INT(5) NOT NULL,
  PRIMARY KEY (id));

- INSERT INTO `employeesystem`.`employees` (`name`, `age`, `country`, `position`, `wage`) VALUES ('Lucas', '31', 'Brasil', 'Fired', '5000');


# Criando Docker container do nodejs + express e Mysql
- Criar uma imagem com base no arquivo Dockerfile 
- docker build -t node-docker-image .
- docker images

- Criar um container com base na imagem
- docker run -d -p 3001:3001 --name node-docker ef6d3f76e282 
- docker ps -a

- Remover todos os containers que não estão em uso
- docker system prune

- docker-compose up --build


This is an example of an basic docker setup for a node api

Build image:
docker build -t node-api:v1 .
create network
docker network create node-api-network
Start MYSQL:
docker run \
--rm \
-d \
--name mysql_server \
-e MYSQL_DATABASE='test_db' \
-e MYSQL_USER='dan' \
-e MYSQL_PASSWORD='secret' \
-e MYSQL_ROOT_PASSWORD='secret' \
--network node-api-network \
mysql:8.0 
Start node-api
docker run \
--rm \
--name node-app \
--network node-api-network \
-p 3000:3000 \
-v $(pwd):/app \
node-api:v1 
Stop running container using
docker stop node-app
docker stop mysql_server
or start using
docker-compose up
and stop using
docker-compose down