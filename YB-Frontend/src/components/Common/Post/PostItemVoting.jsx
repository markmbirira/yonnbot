import React, { Component } from 'react';

import { Link } from 'react-router';

export default class PostItemVoting extends Component {
  render () {
    return (
      <div className="post-item-voting">
        <p><span className="glyphicon glyphicon-arrow-up text-success"></span> 83</p>
        <p><span className="glyphicon glyphicon-arrow-down text-warning"></span> 4</p>
        <p><Link to="/comment"><span className="glyphicon glyphicon-comment text-info"></span> </Link><small>27</small></p>
      </div>
    );
  }
}