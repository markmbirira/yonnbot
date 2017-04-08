import React, { Component } from 'react';
import moment from 'moment';


export default class CommentItem extends Component {
  render() {
    return (
      <div className="comment-item">
        <p>
          <span className="comment-item-author"> by {this.props.author_id } </span>
          <small className="comment-item-created"> { moment(this.props.created).fromNow() } </small>
        </p>
        <p className="comment-item-comment-text">{ this.props.comment_text }</p>
      </div>
    );
  }
};