import React, { Component } from 'react';


export default class CommentItem extends Component {
  render() {
    return (
      <div className="comment-item">
        <p>
          <small className="comment-item-username label label-default">technerd</small>
          <small className="comment-item-created text-info" >
            <em>{'24mins ago'}</em>
          </small>
        </p>
        <p className="comment-item-text">
          {'photoshop AF!'}
        </p>

        <hr />
      </div>
    );
  }
};