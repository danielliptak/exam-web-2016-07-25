const trigger = ( () => {
  const url = 'http://localhost:3000/decode';

  function getInputDatas() {
    return JSON.stringify(
    { text: String(document.querySelector('.text').value),
      shift: document.querySelector('.shift').value,
    });
  }

  function checkInput() {
    var b = JSON.parse(getInputDatas());
    if (b.text.split('').some(elem => elem.match(/[a-zA-Z\s]/) === null)) {
      return window.alert('wrong input');
    }
    return getInputDatas();
  }

  function startEncoding() {
    makerequest('POST', url, checkInput(), 'Content-Type',
    (response) => {
      document.querySelector('p').innerHTML = response.text;
    });
  }

  return {
    startEncoding,
  };
})();
