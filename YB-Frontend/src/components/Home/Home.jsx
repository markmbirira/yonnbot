import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserhistory } from 'react-router';

import postActionCreators from '../../actions/postActionCreators';

import Posts from './Posts';
import PostsGrid from './PostsGrid';
import './Home.css';


class App extends Component {

  constructor(){
    super(...arguments);
    this._renderPosts = this._renderPosts.bind(this);
  }

  componentDidMount() {
    console.log('Home component mounted');
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

  _renderPosts() {
    let { display } = this.props;
    if (display === 'grid') {
      return <PostsGrid />
    } else {
      return  <div className="container">
                <div className="row">
                  <div className="col-md-3"></div>
                  <Posts {...this.props} />
                  <div className="col-md-3"></div>
                </div>
              </div>
    }
  }

  render() {
    return (
      <PostsGrid />
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
    user: state.user,
    display: state.posts.display
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
