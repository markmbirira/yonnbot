import React, { Component } from 'react';

import SubmitForm from './SubmitForm';

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar-col row">
        <SubmitForm   
          sendNewPost={this.props.sendNewPost}
        />
      </div>
    );
  }
}