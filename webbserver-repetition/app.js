const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "\\client"));

app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "ejs");

const namn = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { names: namn });
});

app.post("/", function (req, res) {
  namn.push(req.body.firstName);
  res.redirect("/");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
