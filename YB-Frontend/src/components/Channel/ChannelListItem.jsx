import React, { Component } from 'react';
import { Link } from 'react-router';


export default class ChannelListItem extends Component {

  render() {
    return (
      <div className="row  channel-list-item">
        <div className="col-md-2 col-sm-2 channel-list-item__avatar">
          <img className="thumbnail" src={"/img/channel-pic.jpg"} alt="" />  
        </div>
        <div className="col-md-8 channel-list-item__title">
          <p><Link to="/channels">Technology</Link></p>
        </div>
        <div className="col-md-2">
          <span>3047 posts</span>
        </div>
        <hr />
      </div>
    );
  }
}