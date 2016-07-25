const coder = (() => {
  const letters = 'abcdefghijklmnopqrstuvwxyz,.- .';

  const createKeys = (num) => {
    const encodeTable = {};
    for (var i = 0; i < letters.length; i++) {
      if (letters[i] === ' ') {
        encodeTable[letters[i]] = letters[((i) % (letters.length) + letters.length) % (letters.length)];
      } else {
        encodeTable[letters[i]] = letters[((i-num) % (letters.length) + letters.length) % (letters.length)];
      }
    }
    return encodeTable
  };

  const encode = (req, callback) => {
    var keyTable = createKeys(+req.body.shift);
    var encodedText = req.body.text.split('').reduce((acc, letter) => {
        return acc + keyTable[letter];
    },'');
    const packageResp = { status: 'OK', text: encodedText };
    callback(packageResp);
  };

  const root = (req, cb) => {
    if (!req.body.shift || -25 > req.body.shift > 25) {
      const packageres = { status: 'ERROR', error: 'Shift is out of bound' };
      cb(packageres);
      return;
    } else if (req.body.text.match(/[a-zA-Z]/g) === null || !req.body.text) {
      const packageresp = { status: 'ERROR', error: 'Invalid text, try again' };
      cb(packageresp);
      return;
    }
    encode(req, function (item) {
      cb(item)
    })
  };

  return {
    encode: encode,
    root: root,
  };
})();

module.exports = coder;
