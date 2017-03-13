import React, { Component } from 'react';

import CommentPostThumbnail from './CommentPostThumbnail';
import CommentPostReaction from './CommentPostReaction';


export default class CommentPost extends Component {
  render() {
    return (
      <div className="comment-post">
        <CommentPostReaction />
        <div className="comment-post-details">
          <p>{'Can someone be ugly in photos but pretty in real life?'}</p> {/* post title */}
          <p>
            {'Answer (1 of 10): Yes, photos are mostly a reflection of the skill of the photographer to'}
            {'capture light and the qualities of the camera. The subject of the photograph is secondary'}
            {'Also, some people may react nervously to being photographed and therefore not look as ...'}
          </p> {/* post description */}
          <p className="text-info">https://www.quora.com/Can-someone-be-ugly-in-photos-but-pretty-in-real-life</p>{/* provider URL */}
          <p><small>via johndoe <em className="text-info">4 hrs ago</em></small></p> {/* post author */}
          <CommentPostThumbnail />
        </div>
      </div>
    );
  }
};