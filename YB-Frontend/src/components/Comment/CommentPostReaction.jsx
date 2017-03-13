import React, { Component } from 'react';
import { Link } from 'react-router';


export default class CommentPostReaction extends Component {

  render () {

  return (
      <div className="comment-post-reaction">
        <Link to="#"><span className="glyphicon glyphicon-arrow-up text-sucess"></span> 83</Link>
        <Link to="#"><span className="glyphicon glyphicon-arrow-down text-warning"></span> 4</Link>
        <Link to="#"><span className="glyphicon glyphicon-comment text-info"></span> 44</Link>
      </div>
    );
  }

}
