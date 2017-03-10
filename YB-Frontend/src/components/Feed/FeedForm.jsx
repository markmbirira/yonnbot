import React, { Component } from 'react';

export default class FeedForm extends Component {
  render() {
    return (
      <div className="feedform">
        <h4>Share new link</h4>
        <form className="form-group">
          <label htmlFor="title">Title</label>
          <input className="form-control" type="text"  name="title" placeholder=" title" />
          <label htmlFor="url">URL</label>
          <input className="form-control" type="text" name="url" placeholder=" URL/Link" />
          <hr />
          <p>optional fields</p>
          <hr />
          <label htmlFor="channel">Channel for your link, type-in for suggestions</label>
          <input className="form-control" type="text" name="category" placeholder=" channel" />
          <p>Famous Categories are: Music, Technology, Funny, Programming, N3rd! and Business</p>
          <textarea className="form-control" defaultValue=" short description/summary ..."></textarea>
          <label>
            <input type="radio" name="xrating" value="safe" />
            Safe
          </label>
          <label>
            <input type="radio" name="xrating" value="nsfw" />
            NSFW
          </label>
          <button className="btn btn-md btn-info form-control">Send</button>
        </form>
      </div>
    );
  }
}