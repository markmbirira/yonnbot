import React, { Component } from 'react';
import PostItem from './PostItem';

import './Post.css';

export default class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    );
  }
}