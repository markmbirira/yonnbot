import 'whatwg-fetch'; // window.fetch() polyfill by GitHub

const host = "http://localhost:3000";

let apiComments = {
  fetchAllPostComments(post_id) {
    return fetch(host + "/api/v1/comments/" + post_id,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
    .then((response) => response.json());
  },
  
  fetchSinglePostComment(comment_id) {
    return fetch(host + "/api/v1/comment/:comment_id" + comment_id )
    .then((response) => response.json());
  },

  sendNewComment(post_id, comment_text, auth_token) {
    console.log('post_id in sendNewPost() is', post_id);
    console.log('comment_text in sendNewPost is() ', comment_text);
    console.log('auth_token in action sendNewPost is ', auth_token);

    return fetch(host + "/api/v1/comment/",
    {
        method: 'POST',
        headers: {
          'Authorization': auth_token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          post_id: post_id,
          comment_text: comment_text
        })
      }
    )
    .then((response) => response.json());
  }
};

export default apiComments;

