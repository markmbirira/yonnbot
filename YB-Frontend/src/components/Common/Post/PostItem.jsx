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
        <div className="col-md-11 col-sm-10 post_item_details">
          <p>Pax is a smart tip jar for rideshare drivers</p>
          <p><Link to="#">https://techcrunch.com/2017/03/08/pax-is-a-smart-tip-jar-for-ride-share-drivers/</Link></p>
          <p> via <em>JohnDoe</em>  3hrs ago</p>
          
          <div className="post-item-oembed">
            <img className="thumbnail" src={"/img/nice-car-th.jpg"} alt="" />  
            <p> ugly is real</p>
          </div>

        </div>
        <hr />
      </div>
    );
  }
}