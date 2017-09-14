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
    if (this.props.display === "list") {
      console.log("setting display to grid");
      this.props.toggleDisplay("grid");

      return true;
    } else {
      return false;
    }
  }

  /* toggle post display to list */

  _handleListClick(event) {
    if (this.props.display === "grid") {
      console.log("setting display to list");
      this.props.toggleDisplay("list");

      return true;
    } else {
      return false;
    }
  }

	render() {
		return (
			<div className="display-toggle-container">
				<div className="">
					<div className="btn-group">
						<button type="button" className="btn-button" onclick={this._handleListClick}>
							<i className="fa fa-list"></i>
						</button>
						<button type="button" className="btn-button" onclick={this._shandleGridClick}>
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
		display: state.posts.display
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		toggleDisplay: (toggleState) => dispatch(postActionCreators.toggleDisplay(toggleState))
	}
}

const DisplayToggle = connect(mapStateToProps, mapDispatchToProps)(App);

export default DisplayToggle;