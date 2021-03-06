import 'whatwg-fetch'; // window.fetch() polyfill by GitHub

const host = "http://localhost:3000";

let apiPosts = {
  fetchAllPosts(page) {
    return fetch(host + "/api/v1/posts/" + page,
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
    return fetch(host + "/api/v1/post/" + postId )
    .then((response) => response.json());
  },

  fetchProfilePosts() {
    return fetch(host + "/feed")
    .then((response) => response.json());
  },

  sendNewPost(title, url, auth_token) {
    console.log('title in sendNewPost is ', title);
    console.log('url in action sendNewPost is ', url);
    return fetch(host + "/api/v1/post/",
    {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': auth_token
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

