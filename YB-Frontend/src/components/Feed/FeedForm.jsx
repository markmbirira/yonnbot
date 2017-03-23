import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import postActionCreators from '../../actions/postActionCreators';

class Form extends Component {
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

  render() {
    return (
      <div className="feed-form">
        <p>Share new link post</p>
        <form className="form-group" onSubmit={this._handlePostSubmit}>
          <label htmlFor="title">title</label><br/>
          <input className="form-control" type="text"  name="title" placeholder=" title" ref="title" required /> <br/>
          <label htmlFor="url">url</label><br/>
          <input className="form-control" type="url" name="url" placeholder=" URL/Link" ref="url" required /> <br />
          <label htmlFor="channel" >channel</label><br/>
          <input className="feed-form-input-channel" type="text" name="channel" placeholder=" channel" ref="channel" /> <br />
          
          <button type="submit" className="" value="send" >share</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  sendNewPost: PropTypes.func
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendNewPost: (title, url) => {
      dispatch(postActionCreators.sendNewPost(title, url))
    }
  }
}

const FeedForm = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FeedForm;