const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Texran");
});
app.get("/card", function (req, res) {
  res.send("Этот роут отвечает за карты");
});
app.get("/client", function (req, res) {
  res.send("Этот роут отвечает за клиентов");
});

app.listen(3000, function () {
  console.log("Texran on port 3000!");
});