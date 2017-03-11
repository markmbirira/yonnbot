import React, { Component } from 'react';


export default class CommentItem extends Component {
  render() {
    return (
      <div className="comment-item">
        <p>
          <small className="comment-item__username label label-default">technerd</small>
          <span className="comment-item__text">
            {'this is an aweful post honestly! '}
          </span> 
          <small className="comment-item__created text-info" >
            <em>24mins ago</em>
          </small>
        </p>
      </div>
    );
  }
};