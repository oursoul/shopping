import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.fastmock.site/mock/2cc0ab9bf1c2b238c3c674e5be8884fc",
  timeout: 10000
});
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, {
        // 注意baseURL和headers的位置

        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(
        (res) => {
          resolve(res.data);
        },
        (err) => {
          reject(err);
        }
      );
  });
};

export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then(
      (res) => {
        resolve(res.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
};
