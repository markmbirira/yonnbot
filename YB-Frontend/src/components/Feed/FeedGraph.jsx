import React, { Component } from 'react';

export default class FeedGraph extends Component {
  render() {
    return (
      <div  className="feed-graph">
        <h5>YonnBot feed graph</h5>
        <div className="feed-graph">
          <img src={"/img/d3.png"} alt="" />
        </div>
      </div>
    );
  }
}