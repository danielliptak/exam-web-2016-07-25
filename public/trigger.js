const trigger = (function() {
  const url = 'http://localhost:3000/decode';

  function getInputDatas() {
    return JSON.stringify(
    { text: String(document.querySelector('.text').value),
      shift: document.querySelector('.shift').value,
    });
  }

  function startEncoding() {
    makerequest('POST', url, getInputDatas(), 'Content-Type',
    (response) => {
      document.querySelector('p').innerHTML = response.text;
    });
  }

  return {
    startEncoding,
  };
})();
