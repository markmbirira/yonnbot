import React, { Component } from 'react';

export default class FeedSocialItem extends Component {
  render () {
    return (
      <div className="feed-social-item">
        <span className="glyphicon glyphicon-globe"></span> {this.props.social}
      </div>
    );
  }
}