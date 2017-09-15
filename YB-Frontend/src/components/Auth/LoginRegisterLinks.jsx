import React, { Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import  authActionCreators from '../../actions/authActionCreators';
import './Auth.css';

class App extends Component {

	componentDidMount(){
		let { currentURL, setRedirectUrl } = this.props;
		console.log('setting redirect URL');
		setRedirectUrl(currentURL);
	}

	render() {
		return (
			<div className="overlay">
				<div className="container">
					<div className="row">
						<div className="col-md-3 .mobile-hidden"></div>
						<div className="col-md-6">
							<div className="button-container">
								<Link to="/login" className="btn btn-default pull-left login-button"
											style={{
												backgroundColor: "#2ab27b",
												width: 110,
												border: "none",
												color: "#fff"
											}}
								>
									<i className="fa fa-sign-in" aria-hidden="true"></i>{' '}
									Login
								</Link>
								<Link to="/" className="btn btn-default pull-right cancel-button" style={{opacity: ".7"}}>
									Cancel{' '}
									<i className="fa fa-times" aria-hidden="true"></i>
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