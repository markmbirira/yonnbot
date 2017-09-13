import React, { Component } from 'react';
import Masonry from 'masonry-layout';

import postActionCreators from '../../actions/postActionCreators';
import PostsGridItem from './PostsGridItem';;

export default class App extends Component {

	constructor(){
		super(...arguments);
		this._renderPosts = this._renderPosts.bind(this);
	}

	componentDidMount(){
		this.props.fetchAllPosts();
	}

	componentDidUpdate(prevProps) {
		// Activate masonry plugin when posts are loaded

		var grid = document.querySelector('.grid');
		var msnry = new Masonry( grid, {
		  // options... 
		  itemSelector: '.grid-item',
		  columnWidth: 50
		});
	}

	_renderPosts() {
    
    if(this.props.posts && this.props.posts.length) {
      let post_items = this.props.posts.map(post => 
        <PostsGridItem 
          key={post._id}
          id={post._id}
          title={post.title}
          url={post.url}
          slug_url={post.slug_url}
          created={post.created}
          embedly_data={post.embedly_data}
          upvotes={post.upvotes}
          downvotes={post.downvotes}
          comments={post.comments}
        />
      );
      return post_items;
    } else {
      return (
        <div>
          Loading... 
        </div>
      );
    }
  }

	render() {

		return (
			<div className="container-fluid">
				<div className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>
						{this._renderPosts()}
				</div>
			</div>
		);
	}
}