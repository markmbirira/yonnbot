import React, { Component } from 'react';

import jquery from 'jquery';
import PostItem from './PostItem';


class Posts extends Component {
  constructor(props) {
    super(props);

    this._spinner = this._spinner.bind(this);
    this._renderPosts = this._renderPosts.bind(this);
    this._renderNavigator = this._renderNavigator.bind(this);
    this._renderPrevPosts = this._renderPrevPosts.bind(this);
    this._renderNextPosts = this._renderNextPosts.bind(this);
  }


  _spinner () {
    var i = 0;
    setInterval(function() {
      i = ++i % 4;
      jquery(".post-spinner").text(" fetching" + Array(i+1).join("."));
    }, 600);
  }

  _renderPrevPosts(page) {
    console.log('render prev page ');
    if (this.props.page <= 1) {
      return;    
    }
    this.props.fetchAllPosts(this.props.page - 1);
  }

  _renderNextPosts(page) {
    console.log('render next page');
    if (this.props.page >= this.props.pages) {
      return;
    }
    this.props.fetchAllPosts(this.props.page + 1);
  }

  _renderNavigator() {
    if (this.props.posts && this.props.posts.length) {
      let hide_prev_button = this.props.page === 1 ? "hide_prev_button" : "";
      // let hide_prev_button = this.props.page === 1 ? "hide_prev_button" : "";
      
      return (
        <div className="paginator-links col-12">
          <button onClick={this._renderPrevPosts} className={`paginator-link-prev ${hide_prev_button}`}>
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </button> {' '}
          <span className="paginator-page">{this.props.page}</span> {' '}
          <button onClick={this._renderNextPosts} className="paginator-link-next">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      );
    }
  }


  _renderPosts() {
    
    if(this.props.posts && this.props.posts.length) {
      let post_items = this.props.posts.map(post => 
        <PostItem 
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
        <div className="post-spinner">
          fetching  
        </div>
      );
    }
  }

  render() {
    
    return (
      <div className="row">
        <div className="col-4 mobile-hidden">
          
        </div>
        <div  className="posts col-8">
          {
            (!this.props.posts) ?
              this._spinner() :
              console.log('fetching complete')
          }
          {
            this._renderPosts()
          }
          {
            this._renderNavigator()
          }
          
        </div>
      </div>
    );
  }
};

export default Posts;