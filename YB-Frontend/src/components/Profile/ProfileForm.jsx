import React, { Component } from 'react';

import { browserHistory } from 'react-router';

export default class ProfileForm extends Component {
  constructor(props) {
    super(props);

    let _handleChange = this._handleChange.bind(this);
    let _handleClose = this._handleClose.bind(this);

  }

  _handleChange(field, e){
    // this.props.handleChange(field, e.target.value);
  }
  
  _handleClose(e){
    e.preventDefault();
    // redirect with react router
    browserHistory.replace('/profile');
  }

  render() {
    return (
      <div className="profile-form">
        <div className="profile-form-form">
          <h4>Edit your details</h4>
            <form className="form-group">
              <label htmlFor="username">Username</label>
              <input className="form-control" type="text"  name="username" placeholder=" username" />
              <textarea className="form-control" defaultValue=" short description/summary ..."></textarea>
              
              <hr />
              <p>Default Channel (for your feed at /channels)</p>
              {/* <select value={this.state.value} onChange={this.handleChange}> */}
              <select defaultValue={'technology'}>
                {/* _renderSelectOptions(channels) shall handle rendering the available YonnBot channels */}
                <option defaultValue="technology">Technology</option>
                <option defaultValue="business">Business</option>
                <option defaultValue="programming">Programming</option>
                <option defaultValue="music">Music</option>
                <option defaultValue="funny">Funnny</option>
                <option defaultValue="memes">Memes</option>
                <option defaultValue="video">Video</option>
                <option defaultValue="yonnbot">YonnBot</option>
              </select>
              
              <label>
                <input type="radio" name="xrating" value="nsfw" />
                NSFW
              </label>

              <button className="btn btn-md btn-info form-control">Save profile</button>
            </form>
          </div>
        <div className="profile-form-overlay" onClick={this._handleClose}></div> {/* overlay for modal */}
      </div>
    );
  }
}