import React, { Component } from 'react';
import { connect } from 'react-redux';

import postActionCreators from '../../actions/postActionCreators';
import './Home.css';

export default class App extends Component {

	render() {
		return (
			<div className="col-md-4 col-sm-4 post-grid-item">
				<span className="side-color"></span>
				<div>
					<div className="post-image-container">
						<img src="https://cdn.pixabay.com/photo/2015/09/13/05/48/magnolia-937736__340.jpg" alt="post image" />
					</div>
					<div>
						<h2 className="description">Title for the Post</h2>
						<p className="description">
							Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
						</p>
					</div>
				</div>
			</div>
		);
	}
}