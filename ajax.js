export default class Ajax {

  static getPromiseJSON(url) {
    const promise = new Promise( (resolve, reject) => {
      const handler = function () {
        console.log(this);
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          console.log(this.response);
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      const client = new XMLHttpRequest();
      client.open("GET", url);
      client.setRequestHeader("Accept", "image/webp,image/apng,image/*,*/*;q=0.8");
      client.onreadystatechange = handler;
      // client.responseType = "text";
      client.send(null);

    });
    return promise;
  }

  static getAsyncJSON(url) {
    const handler = async function () {

      console.log(this);
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        console.log(this.response);
        await Promise.resolve(this.response);
      } else {
        await Promise.reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    try {
     // handler = client.onreadystatechange.bind(this);
      client.onreadystatechange =  handler;
    } catch (error) {
      console.error('出错了', error);
    }
    client.responseType = "text";
    client.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
    client.send();
    return client.onreadystatechange;
  }

  static makeAsyncRequest() {
    console.log(Ajax.getAsyncJSON("./package-lock.json"));
    // Ajax.getAsyncJSON("./package-lock.json").then(function (json) {
    //   console.log(json);
    //   for (let index in json) {
    //     console.log('Contents: ' + index);
    //   }
    // }, function (error) {
    //   console.error('出错了', error);
    // });
  }
  static makePromiseRequest() {
    Ajax.getPromiseJSON("http://t.weather.sojson.com/api/weather/city/101030100").then(function (result) {
      console.log(result);
    }, function (error) {
      console.error('出错了', error);
    });
  }
}