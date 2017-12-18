const BASE_API_URL = 'http://dbtest.domacare.fi:5000';

class Api {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_API_URL}${url}`)
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
    });
  }

  static post(url, data) {
    return new Promise((resolve, reject) => {
      let json = '';

      try {
        json = JSON.stringify(data);
      } catch (error) {
        reject(error);
      }

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: json,
      };

      fetch(`${BASE_API_URL}${url}`, options)
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
    });
  }
}

export default Api;
