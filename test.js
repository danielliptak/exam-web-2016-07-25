'use strict';

var coder = require('./coder');
var tape = require('tape');
var sinon = require('sinon');

tape('Does it work', (t) => {
  var req = { body: { text: 'cbc', shift: 1 } };
  var cb = sinon.spy();
  t.ok(coder.encode(req, cb));
  t.end();
});


// var expected = { status: 'OK', text: 'bab' };
