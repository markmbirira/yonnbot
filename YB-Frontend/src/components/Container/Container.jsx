import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserhistory } from 'react-router';

import postActionCreators from '../../actions/postActionCreators';
import authActionCreators from '../../actions/authActionCreators';
import Header from '../Common/Header/Header.jsx';
import Footer from '../Common/Footer/Footer.jsx';

class App extends Component {

  componentDidMount() {
    console.log('Home.jsx just mounted');
    this.props.fetchAllPosts(this.props.page);
    window.scrollTo(0,0);
  }

  componentDidUpdate(prevProps) {

    window.scrollTo(0,0);

    const { navigateTo, redirectURL } = this.props;
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn  = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (isLoggingIn) {
      console.log('navigating after login');
      navigateTo(redirectURL);
    } else if (isLoggingOut) {
      browserhistory.replace('/');
    }
  }

  render() {
    return (
      <div>
        <Header />
        
        { this.props.children }

        <Footer />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log('state is ', state);
  return {
    posts: state.posts.docs,
    page: Number(state.posts.page) || 1,
    pages: Number(state.posts.pages),
    total: Number(state.posts.total),
    limit: Number(state.posts.limit),
    isLoggedIn: state.auth.isLoggedIn,
    redirectURL: state.auth.redirectURL,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: (page) => dispatch(postActionCreators.fetchAllPosts(page)),
    sendNewPost: (title, url) => dispatch(postActionCreators.sendNewPost(title, url)),
    navigateTo: (redirectURL) => dispatch(authActionCreators.navigateTo(redirectURL)),
  }
}


const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
