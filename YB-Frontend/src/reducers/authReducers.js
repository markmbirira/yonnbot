import update from 'react-addons-update';
import { Auth, Users } from '../actions/actionTypes';

const initialState = {
	redirectURL: null,
	isLoggedIn: false,
	loading: false,
	username: null,
	token: null,
}

const auth = (state = initialState, action) => {
	switch (action.type) {
		case Auth.SET_REDIRECT_URL:
			return {...state, redirectURL: action.currentURL }

		case Auth.REDIRECT_ON_LOGIN:
			return {...state, redirectURL: action.redirectURL };

		case Users.LOGIN_REQUEST:
		  console.log('loginUser() loading...');
		    return update(state, { $set: { loading: true }});

		case Users.LOGIN_SUCCESS:
		  if (action.success) {
		    console.log('success authenticating');
		    return update(state, { 
		    						$set : { 
		    							isLoggedIn: true,
		    							username: action.userinfo.username,
		    							token: action.userinfo.token,
		    							loading: false 
		    						}
		    					}
		    			 );
		  } else {
		    console.log('error authenticating: ', action.error);
		    return state;
		  }

		case Users.LOGIN_ERROR:
		  console.log('logoutUser loading error');
		    return state;
		    
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

		case Users.IS_LOGGING_OUT:
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

export default auth;