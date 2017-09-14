import React, { Component } from 'react';
import { connect } from 'react-redux';

import postActionCreators from '../../actions/postActionCreators';

class App extends Component {

	constructor(){
		super(...arguments);

		this._handleGridClick = this._handleGridClick.bind(this);
		this._handleListClick = this._handleListClick.bind(this);
	}

	/* toggle post display to grid */

  _handleGridClick(event) {
  	console.log('grid clicked');
    this.props.toggleDisplay("grid");
  }

  /* toggle post display to list */

  _handleListClick(event) {
  	console.log("list clicked");
    this.props.toggleDisplay("list");
  }

	render() {
		let { display } =this.props;

		return (
			<div className="display-toggle-container">
				<div className="">
					<div className="btn-group">
						<button type="button" className="btn-button" onClick={this._handleListClick} >
							<i className="fa fa-list"></i>
						</button>
						<button type="button" className="btn-button" onClick={this._handleGridClick} >
							<i className="fa fa-th"></i>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		display: state.toggleDisplay.display
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		toggleDisplay: (toggleState) => dispatch(postActionCreators.toggleDisplay(toggleState))
	}
}

const DisplayToggle = connect(mapStateToProps, mapDispatchToProps)(App);

export default DisplayToggle;