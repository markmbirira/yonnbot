import 'whatwg-fetch'; // window.fetch() polyfill by GitHub

const host = "http://localhost:3000";

let apiPosts = {
  fetchAllPosts(page) {
    return fetch(host + "/feed/" + page,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
    .then((response) => response.json());
  },
  
  fetchSinglePost(postId) {
    return fetch(host + "/feed/view/" + postId )
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
  },

  sendNewPost(title, url) {
    console.log('title in sendNewPost is ', title);
    console.log('url in action sendNewPost is ', url);
    return fetch(host + "/feed",
    {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          url: url
        })
      }
    )
    .then((response) => response.json());
  }
};

export default apiPosts;

