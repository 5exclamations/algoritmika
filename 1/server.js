const mysql = require("mysql");
const express = require("express");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "texran",
  database: "task",
});

connection.connect((err) => {
  if (!err) console.log("Sucsess");
  else console.log(err.sqlMessage);
});

app.get("/", (req, res) => {
  connection.query(`SELECT * FROM clients`, (err, data) => {
    if (err) return res.status(500);
    res.json(data);
  });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");

    
});