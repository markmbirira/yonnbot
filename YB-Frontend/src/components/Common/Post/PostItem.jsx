import React, { Component } from 'react';
import { Link } from 'react-router';

import PostItemReaction from './PostItemReaction';


export default class PostItem extends Component {

  render() {
    return (
      <div className="row  post-item">
        <div className="">
          <PostItemReaction />
        </div>
        <div className="post-item-details">
          <div className="post-item-oembed-thumbnail">
            <img className="thumbnaill" src={"/img/nice-car-th.jpg"} alt="" />  
          </div>

          <div className="post-item-details-text">
            <p>Can someone be ugly in photos but pretty in real life?</p>
            <p><Link to="#">https://www.quora.com/Can-someone-be-ugly-in-photos-but-pretty-in-real-life</Link></p>
            <p><small>via johndoe <em className="text-info">4 hrs ago</em></small></p>
            <p><Link to="/comment"><span className="glyphicon glyphicon-comment text-info"></span> </Link><small>27</small></p>
          </div>
        </div>
      </div>
    );
  }
}