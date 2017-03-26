import 'whatwg-fetch'; // window.fetch() polyfill by GitHub

const host = "http://localhost:3000";

let apiComments = {
  fetchSinglePost() {
    return fetch(host + "/feed")
    .then((response) => response.json());
  },
};

export default apiComments;

