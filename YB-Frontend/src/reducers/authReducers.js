import { Auth } from '../actions/actionTypes';

const initialState = {
	redirectURL: null,
	isLoggedIn: false,
}

const auth = (state = initialState, action) => {
	switch (action.type) {
		case Auth.SET_REDIRECT_URL:
			let newState = {...state, redirectURL: action.currentURL }
			return newState;

		default:
			return state;
	}
}

export default auth;