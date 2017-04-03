import React, { Component } from 'react';
// import { Link } from 'react-router';
import moment from 'moment';

import CommentPostThumbnail from './CommentPostThumbnail';


export default class CommentPost extends Component {
  render() {
    console.log('props are ', this.props);
    return (
      <div className="comment-post">
        <div className="comment-post-details">
          <p className="comment-post-title">{this.props.title}</p>
          <p>
            {this.props.embedly_data.description} {' '}  <br />
            <span className="comment-post-readmore"><a href={this.props.url} target="blank"> read &rarr;</a></span>
          </p>
          <CommentPostThumbnail  thumbnail_url={this.props.embedly_data.thumbnail_url} />
          <p>
              by hercules15 {' '}
              <span className="comment-post-created">
                { moment(this.props.created).fromNow() }
              </span> {' '}
            {/*<Link to="#"><span className="glyphicon glyphicon-arrow-up text-sucess"></span> {this.props.upvotes}</Link> {' '} */}  
          </p>
        </div>
      </div>
    );
  }
};