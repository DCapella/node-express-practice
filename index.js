const express = require('express');
const logger = require('morgan');
const http = require('http');
const app = express();

app.use(logger());

// Homepage
app.use((req, res, next) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Welcome to the homepage!\n");
  } else {
    next();
  }
});

// About
app.use((req, res, next) => {
  if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Here is the about page!\n");
  } else {
    next();
  }
});

// 404
app.use((req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end("404 Error!\n");
});

http.createServer(app).listen(1337);
