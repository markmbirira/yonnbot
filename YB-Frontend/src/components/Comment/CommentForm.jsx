import React , { Component } from 'react';

export default class CommentForm extends  Component {
  render () {
    return (
      <div className="comment-form">
        <input className="comment-form-input form-control" type="text" placeholder=" add a comment"/>
        <button className="btn btn-md" > <span className="glyphicon glyphicon-send"></span></button>
      </div>
    );
  }
}