import React, { Component } from 'react';
import FeedForm from './FeedForm';
import FeedGraph from './FeedGraph';

export default class FeedSideBar extends Component {
  render() {
    return (
      <div className="feed-sidebar">
        <FeedForm />
        <FeedGraph />
      </div>
    );
  }
}