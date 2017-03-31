import update from 'react-addons-update';

import { Users } from '../actions/actionTypes';

const initialState = {
  username: false,
  token: false,
  loading: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case Users.LOGIN_USER_REQUEST:
      console.log('loginUser() loading');
      return update(state, { $set: { loading: true }});
    case Users.LOGIN_USER_RESPONSE:
      if (action.success) {
        console.log('success authenticating',action.userinfo);
        return update(state, { $set : { username: action.userinfo.username, token: action.userinfo.token, loading: false }});
      } else {
        console.log('error authenticating:', action.error);
        return state;
      }
    
    case Users.SIGNUP_USER_REQUEST:
      console.log('signupUser() loading');
      return { loading: true };
    case Users.SIGNUP_USER_RESPONSE:
      if (action.success) {
        console.log('success fetching new post', action.userinfo);
        return action.userinfo;
      } else {
        console.log('error fetching new post');
        return { success: false };
      }

      case Users.LOGOUT_USER_REQUEST:
        console.log('logoutUser() loading');
        return state;
      case Users.LOGOUT_USER_RESPONSE:
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

export default user;