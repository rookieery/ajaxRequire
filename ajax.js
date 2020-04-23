export default class Ajax {
  static getPromiseJSON(url, HTTPMethodType, headerMap) {
    const promise = new Promise(((resolve, reject) => {
      const handler = function () {
        if (this.status === 200) {
          resolve(this.response);
        } else if (this.status === 404) {
          reject(new Error(`${404} = Path file not found!`));
        } else if (this.status === 500) {
          reject(new Error(`${500} = Server Error!`));
        }
      };
      const client = new XMLHttpRequest();
      client.open(HTTPMethodType, url);
      headerMap.forEach((value, key) => {
        client.setRequestHeader(key, value);
      });
      client.onload = handler;
      client.send();
    }));
    return promise;
  }

  static async getAsyncJSON(url, HTTPMethodType, headerMap) {
    const response = await Ajax.getPromiseJSON(url, HTTPMethodType, headerMap);
    return response;
  }
}
