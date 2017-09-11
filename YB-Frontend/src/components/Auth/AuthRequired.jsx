import React from 'react';
import { connect } from 'react-redux';

import LoginRegisterLinks from './LoginRegisterLinks';

class Auth extends React.Component {

  render() {
    if (this.props.isLoggedIn) {
    	return this.props.children;
    } else {
    	return <LoginRegisterLinks 
    						currentURL={this.props.currentURL}
    				 />
    }
    
  }
};

const mapStateToProps = (state, ownProps) => {
	return {
		isLoggedIn: state.auth.isLoggedIn,
		currentURL: ownProps.location.pathname,
	}
}
const mapDispatchToProps = (dispatch) => { return {}}

const AuthRequired = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default AuthRequired;

