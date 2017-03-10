import React, { Component } from 'react';

export default class FeedGraph extends Component {
  render() {
    return (
      <div  className="feed-graph">
        <h4>YonnBot feed graph for last month</h4>
        <div className="feed-graph">
          <img src={"/img/d3.png"} alt="" />
        </div>
      </div>
    );
  }
}