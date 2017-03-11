import React, { Component } from 'react';

import CommentPostAvatar from './CommentPostAvatar';
import CommentPostReaction from './CommentPostReaction';


export default class CommentLeft extends Component {
  render() {
    return (
      <div className="comment-left col-md-6">
        <div className="">
          <p>Can someone be ugly in photos but pretty in real life?</p>
          <p className="text-info">https://www.quora.com/Can-someone-be-ugly-in-photos-but-pretty-in-real-life</p>
          <p><small>via johndoe <em className="text-info">4 hrs ago</em></small></p>
        </div>
        <CommentPostAvatar />
        <CommentPostReaction />
      </div>
    );
  }
};