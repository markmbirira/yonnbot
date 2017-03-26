import React, { Component } from 'react';


import PostItem from './PostItem';


class Posts extends Component {
  constructor(props) {
    super(props);

    this._renderPosts = this._renderPosts.bind(this);
    this._renderPrevPosts = this._renderPrevPosts.bind(this);
    this._renderNextPosts = this._renderNextPosts.bind(this);
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


  _renderPosts() {
    
    
    if(this.props.posts && this.props.posts.length) {
      let post_items = this.props.posts.map(post => 
        <PostItem 
          key={post._id}
          id={post._id}
          title={post.title}
          url={post.url}
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
        <div className="loading">
          loading...
        </div>
      );
    }
  }

  render() {
    
    return (
      <div className="col content-col">
        <div className="posts-menu">
          <a className="active-link" href=".">top</a>
          <a href=".">new</a>
        </div>
        <div  className="posts">
          {
            this._renderPosts()
          }

          <p className="paginator-links">
            <a onClick={this._renderPrevPosts} className="paginator-link-prev">
              <span className="paginator-arrow">&#x21E0;</span> prev </a> {' '}
            <span className="paginator-page">{this.props.page}</span>
            <a onClick={this._renderNextPosts} className="paginator-links-next">next 
              <span className="paginator-arrow"> &#x21E2;</span>
            </a>
          </p>
          
        </div>
      </div>
    );
  }
};

export default Posts;
