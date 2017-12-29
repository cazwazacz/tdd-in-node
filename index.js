var express = require('express');
var app = express();

app.get('/modulo', function(req, res) {
  res.send(200);
})

app.listen(3000, function() {
  console.log('Listening on 3000');
})

module.exports = app;
