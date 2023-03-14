const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi Docker!!!");
});

//app.listen(3000);

app.listen(3000, () => {
    console.log("Server rodando na porta 3000");
  });