import 'whatwg-fetch'; // window.fetch() polyfill by GitHub

const host = "http://localhost:3000";

let apiComments = {
  fetchAllPosts() {
    return fetch(host + "/feed")
    .then((response) => response.json());
  },
  
  fetchSinglePost() {
    return fetch(host + "/feed")
    .then((response) => response.json());
  },
  
  fetchChannelList() {
    return fetch(host + "/feed")
    .then((response) => response.json());
  },
  
  fetchSingleChannelPosts() {
    return fetch(host + "/feed")
    .then((response) => response.json());
  },

  fetchProfilePosts() {
    return fetch(host + "/feed")
    .then((response) => response.json());
  }
};

export default apiComments;

