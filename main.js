import Ajax from './ajax.js';

class Main {
    static start() {
        document.getElementById('ajaxButton').addEventListener('click', Main.clickHandler);
    }
    static clickHandler() {
        const url = './package.json';
        const HTTPMethodType = 'GET';
        let headerMap = new Map();
        headerMap.set('Accept', 'application/json');
        Ajax.makePromiseRequest(url, HTTPMethodType, headerMap);
    }
}

window.onload = function () {
    Main.start();
};