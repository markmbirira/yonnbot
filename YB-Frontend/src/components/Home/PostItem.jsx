import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';


export default class PostItem extends Component {
  constructor(props) {
    super(props);
    
    this.renderThumbnail = this.renderThumbnail.bind(this);
    this.renderDate = this.renderDate.bind(this);
  }

  renderThumbnail() {
    var src;
    if(!this.props.embedly_data.thumbnail_url) {
      src = '/img/thumbnail_404.svg';
    } else {
      src = this.props.embedly_data.thumbnail_url;
    }

    return src;
  }

  renderDate() {
    let created = moment(this.props.created);
    created = created.fromNow();
    return created
  }

  render() {

    return (
      <div className="post">
        <div className="post-upvotes">
          <span className="post-upvotes-icon">&#9650;</span>
          <span className="post-upvotes-upvotes">{this.props.upvotes}</span>
        </div>
        <div className="post-thumbnail">
          <img src={ this.renderThumbnail() } alt="img" />
        </div>
        <div className="post-item-details">
          <span className="post-item-details-title">
            {this.props.title}
          </span>
          <div className="post-item-details-meta">
            <span className="post-channel">{'tech'}</span> {' '}
            <span className="post-author">{'hercules15'}</span> {' '}
            <span className="post-created">{ this.renderDate() }</span> {' '} <br />
            <a href={this.props.url} className="post-url" target="blank">
              {this.props.embedly_data.provider_url} 
            </a> {' '}
            <Link to={`post/${this.props.slug_url}`} className="post-item-comments-comments">
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