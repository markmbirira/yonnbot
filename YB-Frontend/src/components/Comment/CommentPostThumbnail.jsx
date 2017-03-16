import React, { Component } from 'react';


export default class CommentPostThumbnail extends Component {
  render() {
    return (
      <div className="comment-post-avatar">
        <img className="comment-post-avatar-image" src={this.props.thumbnail_url} alt="post thumbnail" />
      </div>
    );
  }
};