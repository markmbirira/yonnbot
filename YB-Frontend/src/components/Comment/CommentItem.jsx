import React, { Component } from 'react';


export default class CommentItem extends Component {
  render() {
    return (
      <div className="comment-item">
        <p>
          <span className="comment-item-author"> hercules15 </span>
          <small className="comment-item-created"> {'24mins ago'} </small>
        </p>
        <p className="comment-item-comment-text">
          {'this is where the comment goes'}
        </p>
      </div>
    );
  }
};