import React, { Component } from 'react';

import CommentItemContainer from './CommentItemContainer';
import CommentForm from './CommentForm';


export default class CommentRight extends Component {
  render() {
    return (
      <div className="comment-right col-md-6">
        <CommentItemContainer />
        <CommentForm />
      </div>
    );
  }
};