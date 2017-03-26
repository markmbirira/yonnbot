import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import postActionCreators from '../../actions/postActionCreators';

import Header from '../Common/Header/Header';
import CommentPost from './CommentPost';
import CommentComments from './CommentComments';

import './Comment.css';


class App extends Component {

  componentDidMount() {
    var postId = this.props.params.postId;
    this.props.fetchSinglePost(postId);
    this._renderCommentPost = this._renderCommentPost.bind(this);
  }

  componentDidUpdate(nextProps) {
    console.log('Comment updating, nextProps are', this.props.post.comments);
  }

  _renderCommentPost() {
    let commentpost;
    if (this.props.post && this.props.post.length) {
      commentpost = this.props.post.map(post => 
        <CommentPost
          key={post._id}
          id={post._id}
          title={post.title}
          url={post.url}
          comments={post.comments}
          upvotes={post.upvotes}
          created={post.created}
          embedly_data={post.embedly_data}
        />
      );
      return commentpost;
    }
  }


  render() {
    return (
      <div className="main">
        <Header />

        <div className="comment-content">
          {
            this._renderCommentPost()
          }
          <CommentComments />
        </div>
        <div className="clear"></div>

      </div>
    );
  }
}
/*
id={this.props.post.id}
                title={this.props.post.title}
                url={this.props.post.url}
                created={this.props.post.created}
                description={this.props.post.embedly_data.description}
                thumbnail_url={this.props.post.embedly_data.thumbnail_url}
*/

App.propTypes = {
  post: PropTypes.array,
  fetchSinglePost: PropTypes.func
}

const mapStateToProps = (state) => {
  console.log('state is', state.comments);
  return {
    post: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSinglePost: (postId) => {
      dispatch(postActionCreators.fetchSinglePost(postId));
    }
  }
}

const Comment = connect(mapStateToProps, mapDispatchToProps)(App);

export default Comment;