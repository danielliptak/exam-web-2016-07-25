const coder = (() => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  const createKeys = (num) => {
    const encodeTable = {};
    for (var i = 0; i < letters.length; i++) {
      encodeTable[letters[i]] = letters[((i-num) % (letters.length) + letters.length) % (letters.length)];
    }
    return encodeTable
  };

  const encode = (req, cb) => {
    var keyTable = createKeys(+req.body.shift);
    var encodedText = req.body.text.split('').map((letter) => {
      if (letter !== ' ' || '\n' || '.' || ',') {
        return keyTable[letter];
      }
      return letter;
    });
    const packageResp = { status: 'OK', text: encodedText.join('') };
    cb(packageResp);
  };

  return {
    encode,
  };
})();

module.exports = coder;
