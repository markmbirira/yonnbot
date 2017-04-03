import React, { Component } from 'react';

export default class SubmitForm extends Component {
  constructor(props) {
    super(props);

    this._handlePostSubmit = this._handlePostSubmit.bind(this);
  }

  _handlePostSubmit(event) {
    event.preventDefault();
    let title = this.refs.title.value;
    let url =  this.refs.url.value;

    console.log('new post title is:', title);
    console.log('new post url is:', url);

    if (title.length > 0 && url.length > 0 ) {
      console.log('sending new post');
      this.props.sendNewPost(title, url);
    } else {
      console.log('error sending new post');
    }
    this.refs.title.value = '';
    this.refs.url.value = '';
  }

  render () {
    return (
      <div className="submit-form col-12">
        <form className="submit-form-form" onSubmit={this._handlePostSubmit}>
          <input type="text" name="title" ref="title" placeholder=" title" required /> <br />
          <input type="url" name="url" ref="url" placeholder=" URL " required /> <br />
          <input type="url" name="text" ref="tag" placeholder=" url tag " /> <br />
          <input type="submit" className="" value="submit"  />
        </form>
      </div>
    );
  }
}