import React, { Component } from 'react';

export default class FeedForm extends Component {
  render() {
    return (
      <div className="feedform">
        <p>Share new link post</p>
        <form className="form-group">
          <p htmlFor="title">Title</p>
          <input className="form-control" type="text"  name="title" placeholder=" title" />
          <p htmlFor="url">URL</p>
          <input className="form-control" type="text" name="url" placeholder=" URL/Link" />
          <p htmlFor="channel">Channel for your link, type-in for suggestions</p>
          <input className="form-control" type="text" name="channel" placeholder=" channel" />
          <p className="text-sm">
            <small>Famous Categories are: Music, Technology, Funny, Programming, N3rd! and Business</small>
          </p>
          <label>
            <input type="radio" name="xrating" value="safe" />
            Safe
          </label>
          <label>
            <input type="radio" name="xrating" value="nsfw" />
            NSFW
          </label>
          <button className="btn btn-md btn-warning form-control">
            <span className="glyphicon glyphicon-link"></span>
          </button>
        </form>
      </div>
    );
  }
}