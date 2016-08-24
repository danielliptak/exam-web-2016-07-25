const coder = (() => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  const createKeys = (num) => {
    const encodeTable = {};
    for (var i = 0; i < letters.length; i++) {
      encodeTable[letters[i]] = letters[((i-num) % (letters.length) + letters.length) % (letters.length)];
    }
    return encodeTable;
  };

  const encode = (req, callback) => {
    var keyTable = createKeys(req.body.shift);
    var encodedText = '';
    for (var i = 0; i < req.body.text.length; i++) {
      if (req.body.text[i] === ' ') {
        encodedText += req.body.text[i];
        console.log(encodedText);
      } else {
        encodedText += keyTable[req.body.text[i]];
      }
    }
    const packageResp = { status: 'OK', text: encodedText };
    callback(packageResp);
  };

  const root = (req, cb) => {
    if (req.body.text.match(/[a-zA-Z]/) === null) {
      cb({ status: 'ERROR', error: 'Invalid input' });
      return;
    } else if (+req.body.shift < 25 && +req.body.shift > -25) {
      encode(req, (item) => {
        cb(item);
        return;
      });
    } else {
      cb({ status: 'ERROR', error: 'shift is out of bond' });
      return;
    }
  };

  return {
    encode: encode,
    root: root,
  };
})();

module.exports = coder;
