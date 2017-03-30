import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class PostItem extends Component {
  constructor(props) {
    super(props);
    
    this.renderEmbedly = this.renderEmbedly.bind(this);
  }

  renderEmbedly() {
    if(this.props.embedly_data === 'undefined') {
      this.props.embedly_data = {
        "thumbnail_url": '/img/image404.png',
        "provider_url": this.props.url,
      }
    }
  }

  render() {
    return (
      <div className="post">
        <div className="post-upvotes">
          <span className="post-upvotes-icon">&#9650;</span>
          <span className="post-upvotes-upvotes">{this.props.upvotes}</span>
        </div>
        <div className="post-thumbnail">
          <img src={ this.props.embedly_data.thumbnail_url } alt="img" />
        </div>
        <div className="post-item-details">
          <span className="post-item-details-title">
            {this.props.title}
          </span>
          <div className="post-item-details-meta">
            <span className="post-channel">{'tech'}</span> {' '}
            <span className="post-author">{'hercules15'}</span> {' '}
            <span className="post-created"> 4hrs ago</span> {' '} <br />
            <a href={this.props.url} className="post-url" target="blank">
              {this.props.embedly_data.provider_url} 
            </a> {' '}
            <Link to={`post/${this.props.id}`} className="post-item-comments-comments">
              <span>comments {this.props.upvotes}</span>
            </Link>
          </div>
        </div>

      </div>
    );
  }
}

PostItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  embedly_data: PropTypes.object
}