import React, { Component } from 'react';
import { Link } from 'react-router';

import CommentPostThumbnail from './CommentPostThumbnail';


export default class CommentPost extends Component {
  render() {
    console.log('props are ', this.props);
    return (
      <div className="comment-post">
        <div className="comment-post-details">
          <h5 className="text-info">{this.props.title}</h5>
          <p>
            {this.props.embedly_data.description}...{' '}  <span><a href={this.props.url} target="blank">read full post</a></span>
          </p>
          <CommentPostThumbnail  thumbnail_url={this.props.embedly_data.thumbnail_url} />
          <p>
            <small>via user404 <em className="text-info">{this.props.created}</em></small> {' '}
            <Link to="#"><span className="glyphicon glyphicon-arrow-up text-sucess"></span> {this.props.upvotes}</Link> {' '}
            <Link to="#"><span className="glyphicon glyphicon-comment text-info"></span> {this.props.comments.length}</Link>
          </p>
        </div>
      </div>
    );
  }
};