# desafio_virtex_dev
Desafio – VirteX - Desenvolvimento

# This is an example of an basic docker setup for a node api

# Build image:
docker build -t node-api:v1 .

# create network
docker network create node-api-network

# Start MYSQL:
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

# Start node-api
docker run \
--rm \
--name node-app \
--network node-api-network \
-p 3000:3000 \
-v $(pwd):/app \
node-api:v1 

# Stop running container using
docker stop node-app
docker stop mysql_server

# or start using
docker-compose up

# and stop using
docker-compose down

===================================================================================================================

# Criar Front End Client
- npx create-react-app .

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
CREATE DATABASE IF NOT EXISTS virtex_dev;
USE virtex_dev;

CREATE TABLE IF NOT EXISTS ont (
  ont_id INT NOT NULL AUTO_INCREMENT,
  slot VARCHAR(100) NOT NULL,
  porta VARCHAR(100) NOT NULL,
  sn VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  PRIMARY KEY (ont_id));

INSERT INTO ont ('slot', 'porta', 'sn', 'state') VALUES ('gpon-onu_1/1/1:1', '1(GPON)', '444753542140AF37', 'online');


# Criando Docker container do nodejs + express e Mysql
## Executando

docker run --name mysql-container -d -v /var/lib/mysql -p 3308:3306 -e MYSQL_ROOT_PASSWORD=docker -e MYSQL_DATABASE=docker -e MYSQL_USER=docker -e MYSQL_PASSWORD=docker mysql:5.7

docker exec -i mysql-container mysql -udocker -pdocker docker < script.sql

- Para verificar se está tudo certo vamos rodar o comando:
docker build -t virtex_dev_image .

docker images

- Execute o comando abaixo para criar o container:
docker run -p 3000:3000 -d nome-para-o-container

docker ps

- Para parar, iniciar e ver Logs do container podemos executar os comandos abaixo:
- Parar o container:
docker stop ID
- Iniciar o container
docker start ID
- Ver os logs do que está acontecendo no container:
docker logs ID

- Pode rodar em background e liberar o terminal
docker-compose up -d


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