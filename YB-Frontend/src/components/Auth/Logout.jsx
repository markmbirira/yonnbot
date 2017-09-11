import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import authActionCreators from '../../actions/authActionCreators';

class App extends Component {

  render() {
  	const { isLoggedIn, logout } = this.props;

  	if (!isLoggedIn) {
  		console.log('user already logged out');
  	} else {
  		console.log('logging out user');
  		logout();
  	}
    browserHistory.push('/');

    return (
    	null
    );
  }
}

const mapStateToProps = (state, ownProps) => {
	return {
		isLoggedIn: state.auth.isLoggedIn
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		logout: () => {
			dispatch(authActionCreators.logoutUser())
		}
	}
}

const Logout = connect(mapStateToProps, mapDispatchToProps)(App);

export default Logout;