import React, { Component } from 'react';

import CommentItem from './CommentItem';

export default class CommentComments extends Component {
  constructor(props) {
    super(props);

    this._renderCommentItem = this._renderCommentItem.bind(this);
    this._handleCommentSubmit = this._handleCommentSubmit.bind(this);
  }

  _renderCommentItem() {
    let commentitems;
    if (this.props.comments && this.props.comments.length) {
      commentitems = this.props.comments.map(comment => 
        <CommentItem
          key={ comment._id }
          id={ comment._id }
          comment_text={ comment.comment_text }
          created={ comment.created }
          post_id={ comment.post_id }
          author_id={ comment.post_id }
        />
      );
    } else {
      commentitems = <div className="post-spinner">
        fetching
      </div>
    }
    return commentitems;
  }

  _handleCommentSubmit(event) {
    event.preventDefault();
    let post_id = this.props.post_id;
    let comment_text = this.refs.comment_text.value;
    let auth_token = window.localStorage.getItem('jwt');

    console.log('new comment post_id is:', post_id);
    console.log('new comment comment_text is:', comment_text);
    console.log('auth token is:', auth_token);
    if (comment_text.length <= 0 ) {
      console.log('Error: pass comment_text');
      return;
    } 
    if (!post_id) {
      console.log('Error: pass post_id');
      return;
    }

    if (comment_text.length > 0 && auth_token.length > 0 ) {
      console.log('sending new post');
      this.props.sendNewComment(post_id, comment_text, auth_token);
    } else {
      console.log('error sending new post');
    }
    this.refs.comment_text.value = '';
  }


  render() {
    return (
      <div>
        <div className="comment-comment">
          <div className="comment-form">
            <input ref="comment_text" className="comment-form-input" required />
            <button className="comment-form-button" onClick={this._handleCommentSubmit}>
              <i className="fa fa-comment-o" aria-hidden="true"></i>
            </button>
          </div>
          <div className="comment-item-container">
            {
              this._renderCommentItem()
            }
          </div>
        </div>
      </div>
    );
  }
};