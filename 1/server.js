cards = [
  {
    id: 0,
    number: "2323456789",
  },
  {
    id: 1,
    number: "9953456789",
  },
  {
    id: 2,
    number: "2964456789",
  },
  {
    id: 3,
    number: "1123456789",
  },
  {
    id: 4,
    number: "4123456789",
  },
];

const express = require("express");
const app = express();

app.get("/card", function (req, res) {
  res.send(cards);
});

app.get("/card/:id", function (req, res) {
  const card = JSON.stringify(cards.find((item) => item.id == req.params.id));
  if (!card) res.status(404).send();

  res.status(200).json(card);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});