import React, { Component } from 'react';

export default class SearchButton extends Component {

	render(){
		return (
			<button className="navbar-button btn btn-default search-button" role="search">
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
		);
	}
}