import React, { Component } from 'react';

import CommentPostAvatar from './CommentPostAvatar';
import CommentPostReaction from './CommentPostReaction';


export default class CommentLeft extends Component {
  render() {
    return (
      <div className="comment-left col-md-6">
        <div className="">
          <p>Pax is a smart tip jar for rideshare drivers</p>
          <p>via (https://techcrunch.com/2017/03/08/pax-is-a-smart-tip-jar-for-ride-share-drivers/)</p>
          <p>Ugly is real by <small className="text-info">technerd 4rhs ago</small> </p>
        </div>
        <CommentPostAvatar />
        <CommentPostReaction />
      </div>
    );
  }
};