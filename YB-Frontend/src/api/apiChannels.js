import 'whatwg-fetch'; // window.fetch() polyfill by GitHub

const host = "http://localhost:3000";

let apiChannels = {
  fetchAllChannelsList() {
    return fetch(host + "/category")
    .then((response) => response.json());
  }
};

export default apiChannels;

