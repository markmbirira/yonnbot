import React, { Component } from 'react';
import { connect } from 'react-redux';

import postActionCreators from '../../actions/postActionCreators';

import Header from '../Common/Header/Header';
import Posts from './Posts';
import SideBar from './SideBar';

import './Home.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchAllPosts(this.props.page);
    window.scrollTo(0,0);
  }

  componentDidUpdate(newProps) {
    console.log('New props are ', newProps);
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Posts 
          posts={this.props.posts}
          page={this.props.page}
          pages={this.props.pages}
          limit={this.props.limit}
          total={this.props.total}
          fetchAllPosts={this.props.fetchAllPosts}
        />
        <SideBar 
          sendNewPost={this.props.sendNewPost}
        />
        <div className="clear"></div>
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.docs,
    page: Number(state.posts.page) || 1,
    pages: Number(state.posts.pages),
    total: Number(state.posts.total),
    limit: Number(state.posts.limit)
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
