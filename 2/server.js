const goods = [
  {
    id: 0,
    name: "good1",
    price: 123,
    count: 10,
  },
  {
    id: 1,
    name: "good1",
    price: 103,
    count: 12,
  },
  {
    id: 2,
    name: "good2",
    price: 6666,
    count: 888,
  },
  {
    id: 3,
    name: "good3",
    price: 103.232,
    count: 112222,
  },
  {
    id: 4,
    name: "good4",
    price: 633,
    count: 0,
  },
  {
    id: 5,
    name: "good5",
    price: 378,
    count: 876,
  },
  {
    id: 6,
    name: "good6",
    price: 453,
    count: 1232,
  },
  {
    id: 7,
    name: "good7",
    price: 1.03,
    count: 12231,
  },
  {
    id: 8,
    name: "good8",
    price: 13,
    count: 1212,
  },
  {
    id: 9,
    name: "good10",
    price: 7545,
    count: 345,
  },
];

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send(goods);
});

app.get("/goods/:id", function (req, res) {
  const good = JSON.stringify(goods.find((item) => item.id == req.params.id));
  if (!good) res.status(404).send();

  res.status(200).json(JSON.parse(good));
});

app.get("/goods", function (req, res) {
  const count = parseInt(req.query.count);
  const offset = parseInt(req.query.offset);
  res.send({ goods: goods.slice(offset, offset + count), count: goods.length });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});