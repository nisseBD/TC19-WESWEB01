const express = require("express");
const databaseModule = require("./databaseModule")
const app = express();
const port = 3000;

app.use(express.static(__dirname + "\\client"));

app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "ejs");

const namn = [];

app.get("/", (req, res) => {
  const namnListor = await databaseModule.getAllNameLists();
  res.render("index.ejs", { names: namn, nameLists: namnLista });
});

app.get("/save", (req, res) => {
  databaseModule.saveNameList(namn)

  namn.splice(0, namn.length);
  res.redirect("/");
});


app.post("/", function (req, res) {
  namn.push(req.body.firstName);
  res.redirect("/");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
