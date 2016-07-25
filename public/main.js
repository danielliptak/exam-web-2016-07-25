'use strict';
/* global someFunction trigger:true */

function init() {
  var butt = document.querySelector('.bu');
  butt.addEventListener('click', trigger.startEncoding);
}

window.onload = init;
