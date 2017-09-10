import React, { Component } from 'react';
import { connect } from 'react-redux';

import { browserHistory } from 'react-router';
import authActionCreators from '../../actions/authActionCreators';

class Auth extends Component {

	conmponentDidMount() {
		const { setRedirectUrl, currentURL , isLoggedIn } = this.props;

		if (!isLoggedIn) {
			// set the Redirect URL for future redirection.
			// then redirect.
			console.log("redirecting to /login");
			setRedirectUrl(currentURL);
			browserHistory.replace("/login");
		}

	}

  render() {
    
    let { isLoggedIn } = this.props;
    if (!isLoggedIn) {
    	return this.props.children;
    } else {
    	return null;
    }
    
  }
};

const mapStateToProps = (state, ownProps) => {
	return {
		isLoggedIn: state.user.isLoggedIn,
		currentURL: ownProps.location.pathname,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setRedirectUrl: (currentURL) => dispatch(authActionCreators.setRedirectUrl(currentURL)),
	}
}

const AuthRequired = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default AuthRequired;

