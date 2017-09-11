import { browserHistory } from 'react-router';

import { Auth, Users } from './actionTypes';

import API from '../api';

const authActionCreators = {
	setRedirectURL(currentURL) {
		return {
			type: Auth.SET_REDIRECT_URL,
			currentURL: currentURL,
		}
	},

	navigateTo(redirectURL) {
		console.log('redirecting the user');
		browserHistory.replace(redirectURL);
		return {
			type: Auth.REDIRECT_ON_LOGIN,
			redirectURL: null,
		}
	},

	loginUser(username, password) {
    return (dispatch) => {
      dispatch({ type: Users.LOGIN_REQUEST });
      API.apiUsers.loginUser(username, password).then(
        (userinfo) => dispatch({ type: Users.LOGIN_SUCCESS, success: true, userinfo }),
        (error) => dispatch({ type: Users.LOGIN_ERRORs, success: false, error })
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
}

export default authActionCreators;