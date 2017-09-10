import Auth from './actionTypes';

const authActionCreators = {
	setRedirectURL(currentURL) {
		return {
			type: Auth.SET_REDIRECT_URL,
			currentURL: currentURL,
		}
	},

	navigateTo(redirectURL) {
		return {
			type: Auth.REDIRECT_ON_LOGIN,
			redirectURL: redirectURL
		}
	}

}

export default authActionCreators;