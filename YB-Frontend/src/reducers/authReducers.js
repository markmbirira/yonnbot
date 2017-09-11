import { Auth } from '../actions/actionTypes';

const initialState = {
	redirectURL: null,
	isLoggedIn: false,
}

const auth = (state = initialState, action) => {
	switch (action.type) {
		case Auth.SET_REDIRECT_URL:
			return {...state, redirectURL: action.currentURL }

		case Auth.REDIRECT_ON_LOGIN:
			return {...state, redirectURL: action.redirectURL };

		default:
			return state;
	}
}

export default auth;