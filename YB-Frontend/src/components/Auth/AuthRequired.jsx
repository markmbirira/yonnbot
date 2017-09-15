import React from 'react';
import { connect } from 'react-redux';

import LoginRegisterContainer from './LoginRegisterContainer';

class Auth extends React.Component {

  render() {

    if (this.props.isLoggedIn) {

    	return this.props.children;

    } else {

    	return (
        <LoginRegisterContainer currentURL={this.props.currentURL} />
      );
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

