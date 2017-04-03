import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserhistory } from 'react-router';

import postActionCreators from '../../actions/postActionCreators';
import profileActionCreators from '../../actions/profileActionCreators';

import Header from '../Common/Header/Header';
import Posts from './Posts';
// import SideBar from './SideBar';

import './Home.css';

class App extends Component {
  componentWillMount() {
    // const token = window.localStorage.getItem('jwt');
  }

  componentDidMount() {
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
      <div className="main">
        <Header />
        <div className="row">
          <div className="col-9">
            <Posts 
              posts={this.props.posts}
              page={this.props.page}
              pages={this.props.pages}
              limit={this.props.limit}
              total={this.props.total}
              fetchAllPosts={this.props.fetchAllPosts}
            />
          </div>
          <div className="col-3">
          {/*
            <SideBar
              user={this.props.user}
              sendNewPost={this.props.sendNewPost}
              loginUser={this.props.loginUser}
              registerUser={this.props.registerUser}
            />
          */}
          </div>
        </div>
         <div className="clear"></div>
        { this.props.children }
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
    },
    loginUser: (username, password) => {
      dispatch(profileActionCreators.loginUser(username, password));
    },
    registerUser: (username, password, role) => {
      dispatch(profileActionCreators.registerUser(username, password, role));
    }
  }
}


const Home = connect(mapStateToProps, mapDispatchToProps)(App);

export default Home;
