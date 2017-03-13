import React, { Component } from 'react';


export default class PostItemReaction extends Component {
  render () {
    return (
      <div className="post-item-voting">
        <p><span className="glyphicon glyphicon-arrow-up text-success"></span> 83</p>
        <p><span className="glyphicon glyphicon-arrow-down text-warning"></span> 4</p>
      </div>
    );
  }
}