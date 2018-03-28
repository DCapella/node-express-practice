const express = require('express');
const http = require('http');
const app = express();

app.all("*", (req, res, next) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  next();
});

app.get('/hello/:who', (req, res) => {
  res.end("Hello, " + req.params.who + ".");
});

app.get('/', (req, res) => {
  res.end("Welcome to the Homepage!\n");
});

app.get('/about', (req, res) => {
  res.end("This is the About page!\n");
});

app.get('*', (req, res) => {
  res.end('404!');
});

http.createServer(app).listen(1337);
