import Ajax from './ajax.js';

class Main {
  static start() {
    document.getElementById('ajaxButton').addEventListener('click', Main.clickHandler);
  }

  static async clickHandler() {
    const url = './package.json';
    const HTTPMethodType = 'GET';
    const headerMap = new Map();
    headerMap.set('Accept', 'application/json');
    try {
      const result = await Ajax.getPromiseJSON(url, HTTPMethodType, headerMap);
      alert(result);
    } catch (error) {
      alert(error);
    }
  }
}

window.onload = function () {
  Main.start();
};
