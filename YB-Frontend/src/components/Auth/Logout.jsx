import React from 'react';;
import { browserHistory } from 'react-router';

export default React.createClass({

  render() {
    
    console.log('user logged out');
    browserHistory.push('/');

    return null;
  }
})