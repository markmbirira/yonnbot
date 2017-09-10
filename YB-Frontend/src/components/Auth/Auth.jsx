import React from 'react';

import { browserHistory } from 'react-router';

export default React.createClass({

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
});