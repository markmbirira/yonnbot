import React, { Component } from 'react';


export default class CommentPostAvatar extends Component {
  render() {
    return (
      <div className="comment-post-avatar">
        <img className="thumbnail comment-post-avatar-image" src={'/img/nice-car-th.jpg'} alt="comment-post-avatar" />
      </div>
    );
  }
};