import Auth from './actionTypes';
import { browserHistory } from 'react-router';

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
	}

}

export default authActionCreators;