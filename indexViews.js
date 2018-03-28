const express = require('express');
const app = express();

app.set("views", __dirname + "/views");

app.set("view engine", "pug");

app.get('/', (req, res) => {
  res.render("index", { message: "I am here!" });
});

app.listen(1337);
