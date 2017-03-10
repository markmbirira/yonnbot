import React, { Component } from 'react';
import FeedForm from './FeedForm';
import FeedGraph from './FeedGraph';
import FeedSocial from './FeedSocial';

export default class FeedSideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <FeedForm />
        <FeedGraph />
        <FeedSocial />
      </div>
    );
  }
}