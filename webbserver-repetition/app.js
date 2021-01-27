const express = require("express");
const { set } = require("mongoose");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "\\client"));

app.set("view engine", "ejs");

const namn = [
  "Niklas",
  "Nils",
  "AliG",
  "AliF",
  "Johanna",
  "Liam",
  "Samira",
  "Vinnie",
];

app.get("/", (req, res) => {
  res.render("index.ejs", { names: namn });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
