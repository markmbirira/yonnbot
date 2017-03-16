import React, { Component } from 'react';

import CommentPostThumbnail from './CommentPostThumbnail';
import CommentPostReaction from './CommentPostReaction';


export default class CommentPost extends Component {
  render() {
    console.log('props are ', this.props);
    return (
      <div className="comment-post">
        <CommentPostReaction />
        <div className="comment-post-details">
          <p className="text-info">{this.props.title}</p>
          <p>
            {this.props.description} {' '}
          </p>
          <p><a href="this.props.url" target="blank">Read full post</a></p>
          <p><small>via user404 <em className="text-info">{this.props.created}</em></small></p>
          <CommentPostThumbnail  thumbnail_url={this.props.thumbnail_url} />
        </div>
      </div>
    );
  }
};