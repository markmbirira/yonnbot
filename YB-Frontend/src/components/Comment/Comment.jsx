import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import postActionCreators from '../../actions/postActionCreators';
import commentActionCreators from '../../actions/commentActionCreators';

import Header from '../Common/Header/Header';
import CommentPost from './CommentPost';
import CommentComments from './CommentComments';

import './Comment.css';


class App extends Component {

  componentDidMount() {
    var postId = this.props.params.postId;

    this.props.fetchSinglePost(postId);
    this.props.fetchAllPostComments(postId);

    this._renderCommentPost = this._renderCommentPost.bind(this);
    window.scrollTo(0,0);
  }

  componentDidUpdate(nextProps) {
    console.log('Comment updating, nextProps are', this.props.post.comments);
  }

  _renderCommentPost() {
    let commentpost;
    if (this.props.post && this.props.post.length) {
      commentpost = this.props.post.map(post => 
        <CommentPost
          key={ post._id }
          id={post._id}
          title={post.title}
          url={post.url}
          comments={post.comments}
          upvotes={post.upvotes}
          created={post.created}
          embedly_data={post.embedly_data}
        />
      );
    } else {
      commentpost = <div className="post-spinner">
        fetching
      </div>
    }
    return commentpost;
  }


  render() {
    return (
      <div className="main">
        <Header />

        <div className="row">
          <div className="col-3"></div>
          <div className="comment-content col-6">
            {
              this._renderCommentPost()
            }
            <CommentComments 
              fetchAllPostComments={this.props.fetchAllPostComments}
              fetchSinglePostComment={this.props.fetchSinglePostComment}
              sendNewComment={this.props.sendNewComment}
              post_id={ this.props.params.postId }
              comments={ this.props.comments }
            />
          </div>
          <div className="col-3"></div>
        </div>
        <div className="clear"></div>

      </div>
    );
  }
}

App.propTypes = {
  post: PropTypes.array,
  fetchSinglePost: PropTypes.func
}

const mapStateToProps = (state) => {
  console.log('state in Comments is', state.comments);
  return {
    post: state.comments.post,
    comments: state.comments.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSinglePost: (postId) => {
      dispatch(postActionCreators.fetchSinglePost(postId));
    },
    fetchAllPostComments: (page) => {
      dispatch(commentActionCreators.fetchAllPostComments(page));
    },
    fetchSinglePostComment: (comment_id) => {
      dispatch(commentActionCreators.fetchSinglePostComment(comment_id));
    },
    sendNewComment: (post_id, comment_text, auth_token) => {
      dispatch(commentActionCreators.sendNewPost(post_id, comment_text, auth_token));
    } 
  }
}

const Comment = connect(mapStateToProps, mapDispatchToProps)(App);

export default Comment;