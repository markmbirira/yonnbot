import React, { Component } from 'react';

import { browserHistory } from 'react-router';

import CommentLeft from './CommentLeft';
import CommentRight from './CommentRight';

import './Comment.css';


class Comment extends Component {
  constructor(props) {
    super(props);

    let _handleChange = this._handleChange.bind(this);
    let _handleClose = this._handleClose.bind(this);

  }

  _handleChange(field, e){
    // this.props.handleChange(field, e.target.value);
  }
  
  _handleClose(e){
    e.preventDefault();
    // redirect with react router
    browserHistory.replace('/');
  }

  render() {
    return (
      <div className="comment">
        <div className="comment-left-right-container row">
          <CommentLeft />
          <CommentRight />
        </div>
        <div className="comment-form-overlay" onClick={this._handleClose}>
          <span className="glyphicon glyphicon-remove comment-form-overlay-close"></span>
        </div> {/* overlay for modal */}
      </div>
    );
  }
}

export default Comment;