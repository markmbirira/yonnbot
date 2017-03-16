import React, { Component } from 'react';
import { Link } from 'react-router';


export default class ChannelListItem extends Component {

  render() {
    return (
      <div className="channel-list-item">
        <div className="channel-list-item__avatar">
          <img className="thumbnail" src={"/img/channel-pic.jpg"} alt="" />  
        </div>
        <div className="channel-list-item__title">
          <p><Link to="/channels">{this.props.channel}</Link></p>
        </div>
        <div className="channel-list-item__postcount">
          <span>{this.props.postcount} posts</span>
        </div>
        <div className="channel-list-item-subscribed ">
          <span className="glyphicon glyphicon-check text-info"></span>
        </div>
      </div>
    );
  }
}