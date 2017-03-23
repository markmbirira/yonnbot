import React, { Component } from 'react';
import { Link } from 'react-router';


export default class ChannelListItem extends Component {

  render() {
    return (
      <div className="channel-list-item">
        <div className="channel-list-item-title">
          <Link to="/channels" className="channel-list-item-title__title">{this.props.channel}</Link>
        </div>
        <div className="channel-list-item-postcount">
          <span className="channel-list-item-postcount__postcount">{this.props.postcount} posts</span>
        </div>
        <div className="channel-list-item-subscribed ">
          <span className="">join +</span>
        </div>
      </div>
    );
  }
}