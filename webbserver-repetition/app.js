const express = require("express");
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected")
});

const namnListaSchema = new mongoose.Schema({
  names: Array,
});

const NamnLista = mongoose.model('NamnLista', namnListaSchema);

app.use(express.static(__dirname + "\\client"));

app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "ejs");

const namn = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { names: namn });
});

app.get("/save", (req, res) => {
  var nameList = NamnLista({
    names: namn,
  });

  nameList.save();

  namn.splice(0, namn.length);
  res.redirect("/");
});

app.post("/", function (req, res) {
  namn.push(req.body.firstName);
  res.redirect("/");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
