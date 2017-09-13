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
    let img;
    if(!this.props.embedly_data.thumbnail_url) {
      img = null;
    } else {
      img = <Link to={`post/${this.props.slug_url}`} >
      				<img className="card-img-top" src={ this.props.embedly_data.thumbnail_url } alt="img" />
      			</Link>
    }

    return img;
  }

  renderDate() {
    let created = moment(this.props.created);
    created = created.fromNow();
    return created
  }

	render() {

		return (
		  <div className="card grid-item">
	      { this.renderThumbnail() }
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