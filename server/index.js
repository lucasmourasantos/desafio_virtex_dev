const express = require("express");
const mysql = require("mysql");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi Docker!!!");
});

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