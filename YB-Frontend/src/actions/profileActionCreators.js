import { Users } from './actionTypes'; // post action types/constants

import API from '../api';

let profileActionCreators = {
  // Thunk action creators/async dispatches
  loginUser(username, password) {
    return (dispatch) => {
      dispatch({ type: Users.LOGIN_USER_REQUEST });
      API.apiUsers.loginUser(username, password).then(
        (userinfo) => dispatch({ type: Users.LOGIN_USER_RESPONSE, success: true, userinfo }),
        (error) => dispatch({ type: Users.LOGIN_USER_RESPONSE, success: false, error })
      );
    };
  },

  registerUser(username, email, password) {
    return (dispatch) => {
      dispatch({ type: Users.SIGNUP_USER_REQUEST });
      API.apiUsers.signupUser(username, email, password).then(
        (userinfo) => dispatch({ type: Users.SIGNUP_USER_RESPONSE, success: true , userinfo }),
        (error) => dispatch({ type: Users.SIGNUP_USER_RESPONSE, success: false, error })
      );
    }
  },

  logoutUser() {
    return (dispatch) => {
      dispatch({ type: Users.LOGOUT_USER_REQUEST });
      API.apiUsers.logoutUser().then(
        (userinfo) => dispatch({ type: Users.LOGOUT_USER_RESPONSE, success: true , userinfo }),
        (error) => dispatch({ type: Users.LOGOUT_USER_RESPONSE, success: false, error })
      );
    }
  },

  // Regular Action Creator
  methodName(params) {
    return {
      type: "ACTION_TYPE",
      payload: "action payload"
    }
  },
};

export default profileActionCreators;