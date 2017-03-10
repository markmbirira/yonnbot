import React, { Component } from 'react';
import FeedSocialItem from './FeedSocialItem';

export default class FeedSocial extends Component {
  render () {
    return (
      <div className="feed-social">
        <h4>YonnBot social media integration</h4>
        <p>Share on your linked social accounts</p>
        <div className="feed-social-item-container">
          <FeedSocialItem />
          <FeedSocialItem />
          <FeedSocialItem />
          <FeedSocialItem />
          <FeedSocialItem />
        </div>
      </div>
    );
  }
}