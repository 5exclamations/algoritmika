const express = require("express");
const app = express();

app.get("/", function (req, res) {
  const fs = require("fs");
  fs.readFile("./data.json", "utf-8", (err, data) => {
    if (!err) res.send(data);
    else console.log(err);
  });
});

app.listen(3000, function () {
  console.log("Farman on port 3000!");
});