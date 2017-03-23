// import { List } from 'immutable';

import { Profile } from '../actions/actionTypes';

const initialState = {
  username: null,
  loggedIn: false,
  created: null
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case Profile.LOGIN_USER_REQUEST:
      console.log('loginUser() loading');
      return state;
    case Profile.LOGIN_USER_RESPONSE:
      if (action.success) {
        console.log('success fetching all posts:',action.posts);
        return action.posts;
      } else {
        console.log('error fetching all posts:',action.error);
        return state;
      }
    
    case Profile.SIGNUP_USER_REQUEST:
      console.log('signupUser() loading');
      return state;
    case Profile.SIGNUP_USER_RESPONSE:
      if (action.success) {
        console.log('success fetching new post', action.userinfo);
        return action.userinfo;
      } else {
        console.log('error fetching new post');
        return state;
      }

      case Profile.LOGOUT_USER_REQUEST:
        console.log('logoutUser() loading');
        return state;
      case Profile.LOGOUT_USER_RESPONSE:
        if (action.success) {
          console.log('success logging user out', action.userinfo);
          return action.userinfo;
        } else {
          console.log('error logging user out', action.error);
          return state;
        }

    default:
      return state;
  }
}

export default profile;