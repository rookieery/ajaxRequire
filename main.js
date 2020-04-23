import Ajax from './ajax.js';

class Main {
    static start() {
        document.getElementById('ajaxButton').addEventListener('click', Ajax.makePromiseRequest);
    }
}

window.onload = function () {
    Main.start();
};