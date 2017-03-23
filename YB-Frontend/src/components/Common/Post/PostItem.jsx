import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class PostItem extends Component {

  render() {
   
    return (
      <div className="post">
        <div className="post-upvotes">
          <span className="post-upvotes-icon">&#9650;</span>
          <span className="post-upvotes-upvotes">{this.props.upvotes}</span>
        </div>
        <div className="post-thumbnail">
          <img src={this.props.embedly_data.thumbnail_url} alt="post-thumbnail" />
        </div>
        <div className="post-item-details">
          <span className="post-item-details-title">
            {this.props.title}
          </span>
          <div>
            <span className="post-channel">{'tech'}</span> {' '}
              <small>
                  by user404 {' '}
                <em className="text-info">at {this.props.created}</em> <br />
                  via {' '}
                <Link to={this.props.url} className="post-url">
                  {this.props.embedly_data.provider_url} 
                </Link>
              </small>
          </div>
        </div>
        <div className="post-item-comments">
          <Link to={`post/${this.props.id}`} className="post-item-comments-comments"> comments
          </Link><small> {this.props.upvotes}</small>
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