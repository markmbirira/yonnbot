import React, { Component } from 'react';
import { connect } from 'react-redux';

import postActionCreators from '../../actions/postActionCreators';
import PostsGridItem from './PostsGridItem';

export default class App extends Component {

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="card-columns">
						<PostsGridItem />
						<PostsGridItem />
						<PostsGridItem />
						<PostsGridItem />
						<PostsGridItem />
						<PostsGridItem />
						<PostsGridItem />
						<PostsGridItem />
						<PostsGridItem />
					</div>
				</div>
			</div>
		);
	}
}