'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var coder = require('./coder');
var app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/decode', (req, res) => {
  console.log(req.body);
  coder.encode(req, (item) => {
    console.log(item);
    res.json(item);
  });
});

app.listen(3000);
