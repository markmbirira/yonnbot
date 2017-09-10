import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserhistory } from 'react-router';

import postActionCreators from '../../actions/postActionCreators';
import Header from '../Common/Header/Header.jsx';
import Footer from '../Common/Footer/Footer.jsx';

class App extends Component {
  componentWillMount() {
    
  }

  componentDidMount() {
    console.log('Home.jsx just mounted');
    this.props.fetchAllPosts(this.props.page);
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      browserhistory.push('/');
    }
  }

  componentDidUpdate(newProps) {
    console.log('New props are ', newProps);
    window.scrollTo(0,0);
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
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: (page) => dispatch(postActionCreators.fetchAllPosts(page)),
    sendNewPost: (title, url) => {
      dispatch(postActionCreators.sendNewPost(title, url))
    }
  }
}


const Home = connect(mapStateToProps, mapDispatchToProps)(App);

export default Home;
