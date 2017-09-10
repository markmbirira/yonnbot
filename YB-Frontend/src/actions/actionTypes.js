// Posts
export const Posts = {
  FETCH_ALL_POSTS: "fetch all posts",
  FETCH_SINGLE_POST : "fetch single post",

  RECEIVE_ALL_POSTS: "receive all posts",
  RECEIVE_SINGLE_POST: "receive single post",

  SEND_NEW_POST: 'send a new post to the API',
  RECEIVE_NEW_POST: 'receive new post from API'
};

// Comments
export const Comments = {
  FETCH_ALL_POST_COMMENTS: 'fetch all comments for current post',
  RECEIVE_ALL_POST_COMMENTS: 'receive all comments for the current post',

  FETCH_SINGLE_POST_COMMENT: 'fetch single comment for current post',
  RECEIVE_SINGLE_POST_COMMENT: 'receive single comment for current post',

  SEND_NEW_COMMENT: 'send a new comment to the API',
  RECEIVE_NEW_COMMENT: 'receive new comment from the API'
};

// Users
export const Users = {
  IS_LOGGING_IN: 'user is logging in',
  REDIRECT_ON_LOGIN: 'redirect on logging in',
  IS_LOGGING_OUT: 'user is logging out',
};

// users
export const Auth = {
  SET_REDIRECT_URL: "set URL for subsequent redirection"
}
