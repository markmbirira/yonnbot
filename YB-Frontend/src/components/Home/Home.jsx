import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserhistory } from 'react-router';

import postActionCreators from '../../actions/postActionCreators';

import Posts from './Posts';
import PostsGrid from './PostsGrid';
import DisplayToggle from './DisplayToggle';
import './Home.css';


class App extends Component {

  constructor(){
    super(...arguments);
    this._renderPosts = this._renderPosts.bind(this);
  }

  componentDidMount() {
    console.log('Home component just mounted');

    /* check if there are posts in state */

    let { posts } = this.props;
    console.log("Posts are ", posts);

    if (posts.length > 0){
      console.log("posts already loaded");
    } else {
      console.log("loading posts...");
      this.props.fetchAllPosts(this.props.page);
    }

  
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

  

  /* render our posts depending on the display status */

  _renderPosts() {

    let { display } = this.props;

    if (display === 'grid') {

      return <PostsGrid {...this.props} />

    } else if (display === 'list') {

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
      <div>
        {this._renderPosts()}
        <DisplayToggle />
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
    display: state.posts.display,
    user: state.user,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: (page) => dispatch(postActionCreators.fetchAllPosts(page)),
    sendNewPost: (title, url) => dispatch(postActionCreators.sendNewPost(title, url)),
  }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(App);

export default Home;
