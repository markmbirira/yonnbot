import React, { Component } from 'react';
import { Link } from 'react-router';

import PostItemVoting from './PostItemVoting';


export default class PostItem extends Component {

  render() {
    return (
      <div className="row  post-item">
        <div className="col-md-1 col-sm-2">
          <PostItemVoting />
        </div>
        <div className="col-md-11 col-sm-10 post-item-details">
          <div className="post-item-oembed">
            <img className="thumbnail" src={"/img/nice-car-th.jpg"} alt="" />  
          </div>

          <div className="">
            <p>Can someone be ugly in photos but pretty in real life?</p>
            <p><Link to="#">https://www.quora.com/Can-someone-be-ugly-in-photos-but-pretty-in-real-life</Link></p>
            <p><small>via johndoe <em className="text-info">4 hrs ago</em></small></p>
          </div>
        </div>
      </div>
    );
  }
}