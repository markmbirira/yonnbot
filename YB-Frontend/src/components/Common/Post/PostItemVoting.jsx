import React, { Component } from 'react';

export default class PostItemVoting extends Component {
  render () {
    return (
      <div className="post-item-voting">
        <p><span className="glyphicon glyphicon-arrow-up text-success"></span> 83</p>
        <p><span className="glyphicon glyphicon-arrow-down text-warning"></span> 4</p>
        <p><span className="glyphicon glyphicon-comment text-info"></span> <small>27</small></p>
      </div>
    );
  }
}