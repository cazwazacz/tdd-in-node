var express = require('express');
var app = express();
var modulo = require('./lib/modulo');

app.get('/modulo', function(req, res) {
  res.json({ result: modulo(req.query.a, req.query.b) });
})

app.listen(3000, function() {
  console.log('Listening on 3000');
})

module.exports = app;
