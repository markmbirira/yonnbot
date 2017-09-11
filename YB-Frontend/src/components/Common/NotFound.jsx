import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Notfound extends Component {
  constructor(){
    super(...arguments);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <p className="txt-lg txt-warning">Page not Found</p>
            <Link to="/">Home</Link>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}