import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import PostItemReaction from './PostItemReaction';


export default class PostItem extends Component {

  render() {
   
    return (
      <div className="row  post-item">
        <div className="">
          <PostItemReaction />
        </div>
        <div className="post-item-details">
          <div className="post-item-oembed-thumbnail">
            <img className="" src={this.props.embedly_data.thumbnail_url} alt="" />  
          </div>

          <div className="post-item-details-text">
            <p><a href={this.props.url} target="blank">{this.props.title}</a></p>
            {/* <p className="post-item-description">{this.props.embedly_data.description}</p> */}
            <p>
              <span className="label label-default">Tech</span>{' '}
              <small>
                by user404 {' '}
                <em className="text-info">{this.props.created}</em> {' '}
                via {(this.props.embedly_data.provider_url)}
              </small>
            </p>
            <p>
              <Link to={`comment/${this.props.id}`} >
                <span className="glyphicon glyphicon-comment text-info"></span>
              </Link><small> {this.props.upvotes}</small>
            </p>
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
  embedly_data: PropTypes.string
}