const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

/* const mysqlConfig = {
  host: "mysql_server",
  user: "virtex",
  password: "secret",
  database: "virtex_devops"
}

const con = null */

const db = mysql.createConnection({
  user: "virtex",
  host: "mysql_server",
  password: "secret",
  database: "virtex_devops",
});


app.get('/', function (req, res) {
    res.send('Tudo funcionando.')
})

app.get('/conectar', function (req, res) {
  db.connect(function(err) {
    if (err) throw err;
    res.send('Conectado.')
  });
})

app.get('/criar-db', function (req, res) {
  db.connect(function(err) {
    if (err) throw err;
    const sql = `
    CREATE DATABASE IF NOT EXISTS virtex_devops;
  `;
  db.query(sql, function (err, result) {
      if (err) throw err;
      res.send("DB criado");
    });
  });
})

app.get('/criar-tabela', function (req, res) {
  db.connect(function(err) {
    if (err) throw err;
    const sql = `
    CREATE TABLE IF NOT EXISTS ont (
      ont_id INT NOT NULL AUTO_INCREMENT,
      slot VARCHAR(100) NOT NULL,
      porta VARCHAR(100) NOT NULL,
      sn VARCHAR(100) NOT NULL,
      state VARCHAR(100) NOT NULL,
      PRIMARY KEY (ont_id));
  `;
  db.query(sql, function (err, result) {
      if (err) throw err;
      res.send("Tabela criada");
    });
  });
})

app.get('/inserir', function (req, res) {
  //const number = Math.round(Math.random() * 100)
  db.connect(function(err) {
    if (err) throw err;
    const sql = `INSERT INTO ont (slot, porta, sn, state) VALUES ('gpon-onu_1/1/1:1', '1(GPON)', '444753542140AF37', 'online');`
    db.query(sql, function (err, result) {
      if (err) throw err;
      res.send(`Dados inseridos`)
    });
  })
})

app.get('/mostrar', function (req, res) {
  db.connect(function(err) {
    if (err) throw err;
    const sql = `SELECT * FROM ont`
    db.query(sql, function (err, result, fields) {
      if (err) throw err;
      res.send(JSON.stringify(result))
    });
  });
})

/* app.get("/", (req, res) => {
  res.send("Hi Docker!!!");
});
 */
/* const connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "virtex_dev",
});

connection.connect();


app.get("/ont", function(req, res) {
   
   connection.query("SELECT * FROM ont", function (error, results) {

      if (error) { 
         throw error
   };


   res.send(results.map(item => ({ slot: item.slot, porta: item.porta, sn: item.sn, state: item.state })));


  });

});

app.get("/ont", (req, res) => {
  db.query("SELECT * FROM ont", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}); */

//app.listen(3000);

app.listen(3000, () => {
    console.log("Server rodando na porta 3000");
  });