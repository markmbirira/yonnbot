import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';

import postActionCreators from '../../actions/postActionCreators';
import './PostsGrid.css';

export default class App extends Component {

	constructor(){
		super(...arguments);

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
		  <div className="card grid-item">
	      <div className="card-img-top">
	      	{/* <img src={ this.renderThumbnail() } alt="img" /> */}
	      </div>
	      <div className="card-title">
	            {this.props.title}
	      </div>
	      <div className="card-block">
	        <a href={this.props.url} className="post-url" target="blank">
	          {this.props.embedly_data.provider_url} 
	        </a>
	    	</div>
	    </div>
		);
	}
}