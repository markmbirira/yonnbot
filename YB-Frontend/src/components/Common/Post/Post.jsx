import React, { Component } from 'react';
import PostItem from './PostItem';

import './Post.css';

export default class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <div>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </div>

        <p className="post-paginator"> 
          <button className="btn btn-md">&larr; prev</button>
          <button className="btn btn-md pull-right">next &rarr;</button>
        </p>
        
      </div>
    );
  }
}