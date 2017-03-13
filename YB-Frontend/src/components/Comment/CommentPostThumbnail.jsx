import React, { Component } from 'react';


export default class CommentPostThumbnail extends Component {
  render() {
    return (
      <div className="comment-post-avatar">
        <img className="comment-post-avatar-image" src={'/img/nice-car-th.jpg'} alt="comment-post-avatar" />
      </div>
    );
  }
};