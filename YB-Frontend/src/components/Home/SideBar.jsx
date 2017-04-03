import React, { Component } from 'react';

import SubmitForm from './SubmitForm';
import LoginRegisterForm from './LoginRegisterForm';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this._renderSubmitFormOrUserForm = this._renderSubmitFormOrUserForm.bind(this);
  }

  componentDidUpdate(nextProps) {
    
  }

  _userAuthStatus() {
    // if (typeof(Storage) !== "undefined") {
    //     // Code for localStorage/sessionStorage.
    // } else {
    //     // Sorry! No Web Storage support..
    // }
  }

  _renderSubmitFormOrUserForm() {
    let CurrentComponent =  this.props.user.token ? 
      <SubmitForm sendNewPost={this.props.sendNewPost} /> :
      <LoginRegisterForm 
          loginUser={this.props.loginUser}
          registerUser={this.props.registerUser}
      />
    return CurrentComponent;
  }

  render() {
    return (
      <div className="sidebar-col row">
       {
         this._renderSubmitFormOrUserForm()
       }
      </div>
    );
  }
}