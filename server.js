'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var coder = require('./coder');
var app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/decode', (req, res) => {
  coder.root(req, (item) => {
    res.json(item);
  });
});

app.listen(3000);
