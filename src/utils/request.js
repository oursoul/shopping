import axios from "axios";

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        // 注意baseURL和headers的位置
        baseURL:
          "https://www.fastmock.site/mock/2cc0ab9bf1c2b238c3c674e5be8884fc",
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
