import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import authActionCreators from '../../actions/authActionCreators';

import Header from '../Common/Header/Header.jsx';
import Footer from '../Common/Footer/Footer.jsx';

class App extends Component {

  componentDidUpdate(prevProps) {

    const { navigateTo, redirectURL } = this.props;
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn  = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (isLoggingIn) {
      // visit the previously selected URL or Home
      navigateTo(redirectURL || '/');
    } else if (isLoggingOut) {
      browserHistory.replace('/');
    }
  }

  render() {
    return (
      <div>
        <Header />
        
        { this.props.children }

        {/* <Footer /> */}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log('state is ', state);
  return {
    isLoggedIn: state.auth.isLoggedIn,
    redirectURL: state.auth.redirectURL,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigateTo: (redirectURL) => dispatch(authActionCreators.navigateTo(redirectURL)),
  }
}


const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
