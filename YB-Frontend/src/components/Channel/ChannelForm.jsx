import React, { Component } from 'react';

export default class ChannelForm extends Component {
  render() {
    return (
      <div className="channel-form">
        <h4 className="text-info">Create a channel</h4>
        <form className="form-group">
          <label htmlFor="title">Channel Title </label>
          <input className="form-control" type="text"  name="title" placeholder=" (No spaces)" />
          <label>
            <input type="radio" name="xrating" value="safe" />
            Safe
          </label>
          <label>
            <input type="radio" name="xrating" value="nsfw" />
            NSFW
          </label>
          <button className="btn btn-md btn-success form-control">Create Channnel</button>
        </form>

        <div className="channel-form-protip">
          <p> Your channel should be awesome to attract subscriptions. You can appoint up to a 
              maximum of 4 administrators (a channel has 5 admins). Kindly indicate the XRated status 
              of your channel so we can easily classify content. Happy  Sharing!
          </p>
        </div>
      </div>
    );
  }
}