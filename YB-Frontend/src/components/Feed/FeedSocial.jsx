import React, { Component } from 'react';
import FeedSocialItem from './FeedSocialItem';

export default class FeedSocial extends Component {
  render () {
    return (
      <div className="feed-social">
        <h5>Configure social accounts</h5>
        <div className="feed-social-item-container">
          <FeedSocialItem social="FaceBook"/>
          <FeedSocialItem social="Twitter" />
          <FeedSocialItem social="Google" />
          <FeedSocialItem social="GitHub" />
        </div>
      </div>
    );
  }
}