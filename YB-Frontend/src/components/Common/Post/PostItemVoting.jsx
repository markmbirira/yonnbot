import React, { Component } from 'react';

export default class PostItemVoting extends Component {
  render () {
    return (
      <div className="post-item-voting">
        <p>&uarr; 83</p>
        <p>&darr;4</p>
        <p><span className="glyphicon glyphicon-comment"></span> <small>27</small></p>
      </div>
    );
  }
}