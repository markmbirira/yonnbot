import React, { Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import  authActionCreators from '../../actions/authActionCreators';
import './Login.css';

class App extends Component {

	componentDidMount(){
		let { currentUrl, setRedirectUrl } = this.props;
		console.log('setting redirect URL');
		setRedirectUrl(currentUrl);
	}

	render() {
		return (
			<div className="overlay">
				<div className="container">
					<div className="row">
						<div className="col-md-3 .mobile-hidden"></div>
						<div className="col-md-6">
							<div className="button-container">
								<Link to="/login" className="btn btn-lg btn-success pull-left login-button">
									Login
								</Link>
								<Link to="/" className="btn btn-lg btn-warning pull-right cancel-button">
									Cancel
								</Link>	
							</div>
						</div>
						<div className="col-md-3 mobile-hidden"></div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setRedirectUrl: (redirectURL) => {
			dispatch(authActionCreators.setRedirectURL(redirectURL))
		}
	}
}

const LoginRegisterLinks = connect(mapStateToProps, mapDispatchToProps)(App);

export default LoginRegisterLinks;