'use strict';

const makerequest = function xhrRequest(method, url, data, type, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader(type, 'application/json');
  xhr.send(data);
  xhr.onload = function () {
    const readyState = xhr.readyState;
    if (readyState === 4) {
      console.log(xhr.response);
      cb(JSON.parse(xhr.response));
    } else {
      console.log('Something Happend');
    }
  };
};
