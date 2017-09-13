import React, { Component } from 'react';
import { connect } from 'react-redux';

import postActionCreators from '../../actions/postActionCreators';
import './PostsGrid.css';

export default class App extends Component {

	render() {

		return (
		    <div className="card grid-card">
		    	<div>
		    		<img className="card-img-top thumbnail" src="" alt="post-title" />
		    	</div>
		      <div className="card-block">
		      	<div className="card-title">Sorting an array to chunks with ES6!</div>
		      	<div className="card-text">Sorting an array is a common task that we all run into in our daily coding expre...</div>
		      </div>
		      <div className="card-footer">
		      	<button type="button" class="btn btn-default">button</button>
		      </div>
		    </div>
		);
	}
}