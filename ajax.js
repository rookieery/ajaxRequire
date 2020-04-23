export default class Ajax {
  static getPromiseJSON(url, HTTPMethodType, headerMap) {
    const promise = new Promise((resolve, reject) => {
      const handler = function () {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      const client = new XMLHttpRequest();
      client.open(HTTPMethodType, url);
      for (let [key, value] of headerMap) {
        client.setRequestHeader(key, value);
      }
      client.onreadystatechange = handler;
      client.send(null);
    });
    return promise;
  }

  static async getAsyncJSON(url, HTTPMethodType, headerMap) {
    return await new Promise((resolve, reject) => {
      const handler = function () {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      const client = new XMLHttpRequest();
      client.open(HTTPMethodType, url);
      for (let [key, value] of headerMap) {
        client.setRequestHeader(key, value);
      }
      client.onreadystatechange = handler;
      client.send(null);
    });
  }

  static async makeAsyncRequest(url, HTTPMethodType, headerMap) {
    let result = null;
    try {
      result = await Ajax.getAsyncJSON(url, HTTPMethodType, headerMap);
    } catch (error) {
      console.error('出错了', error);
    }
    console.log(result);
  }
  static makePromiseRequest(url, HTTPMethodType, headerMap) {
    Ajax.getPromiseJSON(url, HTTPMethodType, headerMap).then(function (result) {
      console.log(result);
    }, function (error) {
      console.error('出错了', error);
    });
  }
}