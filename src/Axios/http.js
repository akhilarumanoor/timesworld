import axios from "axios";

const http = axios.create({
  baseURL: `https://restcountries.com/v2/all?fields=name,region,flag`,
});

http.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    return Promise.resolve({ error });
  }
);
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    console.log("errres", err);
    return new Promise(function (resolve, reject) {
      (async () => {
        reject(err);
        throw err;
      })();
    });
  }
);

export default http;
