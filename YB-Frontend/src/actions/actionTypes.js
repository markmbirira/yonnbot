// Posts
export const Posts = {
  FETCH_ALL_POSTS: "fetch all posts",
  FETCH_SINGLE_POST : "fetch single post",
  FETCH_SINGLE_CHANNEL_POSTS : "fetch all posts in a channel",
  FETCH_ALL_PROFILE_POSTS : "fetch all posts by current user",

  RECEIVE_ALL_POSTS: "receive all posts",
  RECEIVE_SINGLE_POST: "receive single post",
  RECEIVE_SINGLE_CHANNEL_POSTS: "receive single channel posts",
  RECEIVE_ALL_PROFILE_POSTS: "receive all posts by current user",

  SEND_NEW_POST: 'send a new post to the API',
  RECEIVE_NEW_POST: 'receive new post from API'
};

// Comments
export const Comments = {

};

// Channels
export const Channels = {
  FETCH_ALL_CHANNELS_LIST : "fetch all channels available",
  RECEIVE_ALL_CHANNELS_LIST: "receive all channels available"
};

// Register
export const Profile = {
  LOGIN_USER_REQUEST: "login current user start session",
  LOGIN_USER_RESPONSE: "receive the response of user login to start session",
  
  LOGOUT_USER_REQUEST: "logout current user end session to end session",
  LOGOUT_USER_RESPONSE: "receive the response of user logout end session",
  
  SIGNUP_USER_REQUEST: "sign up the current user start session",
  SIGNUP_USER_RESPONSE: "receive the response of user register and start session"
}

