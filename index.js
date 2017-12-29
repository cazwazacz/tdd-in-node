var express = require('express');
var app = express();
var modulo = require('./lib/modulo');

app.use(function(req, res, next) {
  var a = parseInt(req.query.a);
  var b = parseInt(req.query.b);
  if (!a || !b || isNaN(a) || isNaN(b)) {
    return res.status(422).end("You must specify two numbers as query parameters a and b")
  }
  return next();
})

app.get('/modulo', function(req, res) {
  res.json({ result: modulo(req.query.a, req.query.b) });
})

module.exports = app;
