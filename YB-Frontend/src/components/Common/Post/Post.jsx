import React, { Component, PropTypes } from 'react';
// import classnames from 'classnames';

import { connect } from 'react-redux';

import postActionCreators from '../../../actions/postActionCreators';
import PostItem from './PostItem';

import './Post.css';


class App extends Component {
  constructor(props) {
    super(props);

    this._renderPosts = this._renderPosts.bind(this);
    this._renderPrevPosts = this._renderPrevPosts.bind(this);
    this._renderNextPosts = this._renderNextPosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPosts(this.props.page);
    window.scrollTo(0,0);
  }

  componentDidUpdate(newProps) {
    console.log('New props are ', newProps);
    window.scrollTo(0,0);
  }

  _renderPrevPosts(page) {
    console.log('render prev page ');
    if (this.props.page <= 1) {
      return;    
    }
    this.props.fetchAllPosts(this.props.page - 1);
  }

  _renderNextPosts(page) {
    console.log('render next page');
    if (this.props.page >= this.props.pages) {
      return;
    }
    this.props.fetchAllPosts(this.props.page + 1);
  }


  _renderPosts() {
    
    
    if(this.props.posts && this.props.posts.length) {
      let post_items = this.props.posts.map(post => 
        <PostItem 
          key={post._id}
          id={post._id}
          title={post.title}
          url={post.url}
          created={post.created}
          embedly_data={post.embedly_data}
          upvotes={post.upvotes}
          downvotes={post.downvotes}
          comments={post.comments}
        />
      );
      return post_items;
    } else {
      return (
        <div className="alert alert-info text-sm">
          loading...
        </div>
      );
    }
  }

  render() {
    
    return (
      <div className="posts">
        <div>
          {
            this._renderPosts()
          }
        </div>

        <p className="paginator-links">
          <a onClick={this._renderPrevPosts} className="paginator-link-prev">
            <span className="paginator-arrow">&#x21E0;</span> prev </a> {' '}
          <span className="paginator-page">{this.props.page}</span>
          <a onClick={this._renderNextPosts} className="paginator-links-next">next 
            <span className="paginator-arrow"> &#x21E2;</span>
          </a>
        </p>
        
      </div>
    );
  }
};

App.propTypes = {
  posts: PropTypes.array,
  page: PropTypes.number,
  pages: PropTypes.number,
  total: PropTypes.number,
  limit: PropTypes.number
};

const mapStateToProps = (state) => {
  console.log('state in Post ', state);
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
  }
}


const Post = connect(mapStateToProps, mapDispatchToProps)(App);

export default Post;
