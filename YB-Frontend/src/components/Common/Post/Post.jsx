import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import postActionCreators from '../../../actions/postActionCreators';
import PostItem from './PostItem';

import './Post.css';


class App extends Component {
  constructor(props) {
    super(props);

    this._renderPosts = this._renderPosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  componentDidUpdate(newProps) {
    console.log('New props are ', newProps);
  }

  _renderPosts() {
    let post_items;
    
    if(this.props.posts && this.props.posts.length) {
      post_items = this.props.posts.map(post => 
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
          No Posts available
        </div>
      );
    }
  }

  render() {
    return (
      <div className="post-container">
        <div>
          {
            this._renderPosts()
          }
        </div>

        <p className="post-paginator"> 
          <button className="btn btn-md">&larr; prev</button>
          <button className="btn btn-md pull-right">next &rarr;</button>
        </p>
        
      </div>
    );
  }
};

App.propTypes = {
  posts: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: () => dispatch(postActionCreators.fetchAllPosts()),
  }
}


const Post = connect(mapStateToProps, mapDispatchToProps)(App);

export default Post;
